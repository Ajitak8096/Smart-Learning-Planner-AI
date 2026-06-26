const generateSchedule = (planner) => {
  const {
    dailyHours,
    weakSubjects,
  } = planner;

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const strongSubjects = [
    "English",
    "Computer",
    "General Awareness",
  ].filter((subject) => !weakSubjects.includes(subject));

  const weeklySchedule = [];

  days.forEach((day) => {
    let dayPlan = [];

    let remainingHours = Number(dailyHours);

    // Give 2 hours to each weak subject
    weakSubjects.forEach((subject) => {
      if (remainingHours >= 2) {
        dayPlan.push({
          subject,
          duration: 2,
        });

        remainingHours -= 2;
      }
    });

    // Fill remaining hours with strong subjects
    let index = 0;

    while (remainingHours > 0) {
      dayPlan.push({
        subject:
          strongSubjects[index % strongSubjects.length] ||
          "Revision",
        duration: 1,
      });

      remainingHours--;
      index++;
    }

    // Sunday Mock Test
    if (day === "Sunday") {
      dayPlan.push({
        subject: "Mock Test",
        duration: 2,
      });
    }

    weeklySchedule.push({
      day,
      tasks: dayPlan,
    });
  });

  return weeklySchedule;
};

module.exports = generateSchedule;