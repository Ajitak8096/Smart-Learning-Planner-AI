const Planner = require("../models/Planner");

exports.getDashboard = async (req, res) => {
  try {

    const planner = await Planner.findOne({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    if (!planner) {
      return res.status(404).json({
        success: false,
        message: "Planner not found",
      });
    }

    const today = new Date();

    const examDate = new Date(planner.examDate);

    const daysLeft = Math.max(
      0,
      Math.ceil(
        (examDate - today) /
        (1000 * 60 * 60 * 24)
      )
    );

    res.status(200).json({
      success: true,

      dashboard: {

        examName: planner.examName,

        goal: planner.goal,

        dailyHours: planner.dailyHours,

        daysLeft,

        readiness: planner.readiness,

        progress: planner.progress,

        xp: planner.xp,

        streak: planner.streak,

        completedTasks: planner.completedTasks,

        totalTasks: planner.totalTasks,

        schedule: planner.schedule,

        weakSubjects: planner.weakSubjects,

      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};