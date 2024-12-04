const express = require("express");
const CreateReviews = require("../Controllers/CreateReviews/createreviews");
const router = express.Router();

// create route to register new product
router.post("/createreview",CreateReviews)

module.exports = router;