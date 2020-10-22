const eventCtrl = require("../controllers/eventCtrl");
const express = require("express");
const router = express.Router();

router.get("/events", eventCtrl.getAllEvent);
router.post("/event/validation", eventCtrl.eventGetValidation);
router.patch("/event/update", eventCtrl.editEvent);
router.delete("delete/event/:id", eventCtrl.deleteEvent);
router.post("/event/request", eventCtrl.eventRequest);
router.delete("delete/event/request/:id", eventCtrl.deleteEventRequest);
module.exports = router;
