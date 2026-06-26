const Planner = require("../models/Planner");
const generateSchedule = require("../services/aiPlanner");
const adaptSchedule = require("../services/adaptiveScheduler");
// =========================
// Create Planner
// =========================

exports.createPlanner = async (req, res) => {
  try {

    const {
      examName,
      examDate,
      goal,
      targetScore,
      dailyHours,
      weakSubjects,
    } = req.body;

    console.log("dailyHours:", dailyHours);
console.log("weakSubjects:", weakSubjects);

const schedule = generateSchedule({
  dailyHours,
  weakSubjects,
});

console.log("Generated Schedule:");
console.log(JSON.stringify(schedule, null, 2));

    const planner = await Planner.create({
      user: req.user.id,
      examName,
      examDate,
      goal,
      targetScore,
      dailyHours,
      weakSubjects,
      schedule,
    });

    res.status(201).json({
      success: true,
      message: "AI Study Plan Generated Successfully",
      planner,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// =========================
// Get Planner
// =========================

exports.getPlanner = async (req, res) => {

  try {

    const planner = await Planner.findOne({
    user: req.user.id,
}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      planner,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};

// =========================
// Update Task Status
// =========================

exports.updateTaskStatus = async (req, res) => {

  try {

    const { plannerId, day, taskIndex } = req.params;

    const planner = await Planner.findById(plannerId);

    if (!planner) {
      return res.status(404).json({
        success: false,
        message: "Planner not found",
      });
    }

    const selectedDay = planner.schedule.find(
      (d) => d.day === day
    );

    if (!selectedDay) {
      return res.status(404).json({
        success: false,
        message: "Day not found",
      });
    }

    const task = selectedDay.tasks[taskIndex];

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    // Toggle Task
    task.completed = !task.completed;

    // ==========================
    // Calculate Progress
    // ==========================

    let totalTasks = 0;
    let completedTasks = 0;

    planner.schedule.forEach((studyDay) => {

      studyDay.tasks.forEach((studyTask) => {

        totalTasks++;

        if (studyTask.completed) {
          completedTasks++;
        }

      });

    });

    planner.totalTasks = totalTasks;
    planner.completedTasks = completedTasks;

    planner.progress = Math.round(
      (completedTasks / totalTasks) * 100
    );

    planner.readiness = Math.min(
      100,
      Math.round(planner.progress * 1.2)
    );

    planner.xp = completedTasks * 20;

    planner.streak = Math.max(1, completedTasks);

    await planner.save();

    // ==========================
    // Adaptive AI Scheduler
    // ==========================

    await adaptSchedule(planner._id);

    // Fetch Updated Planner

    const updatedPlanner = await Planner.findById(planner._id);

    res.status(200).json({

      success: true,

      message: "Task Updated Successfully",

      planner: updatedPlanner,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Server Error",

    });

  }

};