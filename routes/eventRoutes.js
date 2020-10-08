const eventCtrl = require("../controllers/eventCtrl");
const express = require("express");
const router = express.Router();

router.post("/event", eventCtrl.creatEvent);
router.get("event/:id", eventCtrl.getOneEvent);
router.patch("event/:id", eventCtrl.editEvent);
router.delete("event/:id", eventCtrl.deleteEvent);

router.get("event", eventCtrl.getAllEvent);

module.exports = router;
