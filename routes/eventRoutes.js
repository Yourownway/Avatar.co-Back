const eventCtrl = require("../controllers/eventCtrl");
const express = require("express");
const router = express.Router();

router.get("/events", eventCtrl.getAllEvent);
router.post("/event/validation", eventCtrl.eventGetValidation);
router.patch("/event/update", eventCtrl.editEvent);
router.delete("/cancel/event/:id", eventCtrl.deleteEvent);
router.post("/event/request", eventCtrl.eventRequest);
router.patch("/validate/request/event/:id", eventCtrl.eventValidate);
router.patch("/decline/request/event/:id", eventCtrl.eventDecline);
router.post("/user/event", eventCtrl.getUserEvent);
router.get("/getEvents/postId/:id", eventCtrl.getEventByPostId);
module.exports = router;
