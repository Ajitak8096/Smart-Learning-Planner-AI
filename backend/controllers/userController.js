const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const {
      fullName,
      goal,
      targetExam,
      dailyHours,
      avatar,
    } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        fullName,
        goal,
        targetExam,
        dailyHours,
        avatar,
      },
      {
        new: true,
      }
    ).select("-password");

    res.json(user);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Profile update failed",
    });
  }
};