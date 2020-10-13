const eventCtrl = require("../controllers/eventCtrl");
const express = require("express");
const router = express.Router();

router.post("/event/participate", eventCtrl.eventRequest);
router.post("/event/validation", eventCtrl.eventGetValidation);

module.exports = router;
