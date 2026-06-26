const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {

    getAIRecommendation,

} = require("../controllers/aiController");

router.get(

    "/recommendation",

    protect,

    getAIRecommendation

);

module.exports = router;