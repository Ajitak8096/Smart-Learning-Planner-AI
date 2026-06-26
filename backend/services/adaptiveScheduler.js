const Planner = require("../models/Planner");

const adaptSchedule = async (plannerId) => {

  const planner = await Planner.findById(plannerId);

  if (!planner) return null;

  const today = new Date();

  const examDate = new Date(planner.examDate);

  const daysLeft = Math.ceil(
    (examDate - today) / (1000 * 60 * 60 * 24)
  );

  planner.schedule.forEach((day) => {

    day.tasks.forEach((task) => {

      const isWeakSubject =
        planner.weakSubjects.includes(task.subject);

      // ------------------------
      // If task was NOT completed
      // ------------------------

      if (!task.completed) {

        if (isWeakSubject) {

          task.duration = Math.min(
            task.duration + 1,
            4
          );

        } else {

          task.duration = Math.min(
            task.duration + 0.5,
            3
          );

        }

      }

      // ------------------------
      // Completed Task
      // ------------------------

      else {

        task.duration = Math.max(
          1,
          task.duration - 0.5
        );

      }

    });

    // ------------------------
    // Exam Near → Add Revision
    // ------------------------

    if (daysLeft <= 30) {

      const revisionExists = day.tasks.some(
        (task) => task.subject === "Revision"
      );

      if (!revisionExists) {

        day.tasks.push({
          subject: "Revision",
          duration: 1,
          completed: false,
        });

      }

    }

    // ------------------------
    // Very Near Exam → Mock Test
    // ------------------------

    if (daysLeft <= 15) {

      const mockExists = day.tasks.some(
        (task) => task.subject === "Mock Test"
      );

      if (!mockExists) {

        day.tasks.push({
          subject: "Mock Test",
          duration: 2,
          completed: false,
        });

      }

    }

  });

  await planner.save();

  return planner;

};

module.exports = adaptSchedule;