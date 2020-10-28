const eventCtrl = require("../controllers/eventCtrl");
const express = require("express");
const { route } = require("./postRoutes");
const router = express.Router();

router.post("/event/:postId/:userId/new", eventCtrl.createEvent); // pour cree les events
router.get("/events", eventCtrl.getAllEvent);
router.post("/event/validation", eventCtrl.eventGetValidation);
router.patch("/event/update", eventCtrl.editEvent); //edit event
router.delete("/event/:postId/:userId/cancel", eventCtrl.deleteEvent); //cancel event
router.post("/event/send/request", eventCtrl.eventRequest);
router.patch("/validate/request/event/:id", eventCtrl.eventValidate);
router.patch(
  "/request/event/:userId/:eventId/decline/",
  eventCtrl.eventDecline
);
router.post("/user/event", eventCtrl.getUserEvent);
router.get("/event/getEvents/postId/:id", eventCtrl.getEventByPostId); //PROFIL USER .all

module.exports = router;
