const Planner = require("../models/Planner");
const generateRecommendation = require("../services/geminiService");

exports.getAIRecommendation = async (req, res) => {

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

        const daysLeft = Math.ceil(

            (examDate - today) /

            (1000 * 60 * 60 * 24)

        );

        let totalTasks = 0;

        let completedTasks = 0;

        planner.schedule.forEach(day => {

            day.tasks.forEach(task => {

                totalTasks++;

                if (task.completed) completedTasks++;

            });

        });

        const progress =

            totalTasks === 0

                ? 0

                : Math.round(

                    (completedTasks / totalTasks) * 100

                );

        const readiness = Math.min(

            100,

            Math.round(progress * 1.2)

        );

        const recommendation =

            await generateRecommendation({

                examName: planner.examName,

                goal: planner.goal,

                daysLeft,

                dailyHours: planner.dailyHours,

                weakSubjects: planner.weakSubjects,

                readiness,

                progress,

                streak: planner.streak || 0,

                xp: planner.xp || 0,

            });

        res.status(200).json({

            success: true,

            recommendation,

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: "Server Error",

        });

    }

};