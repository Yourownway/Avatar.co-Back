const eventCtrl = require("../controllers/eventCtrl");
const express = require("express");
const { route } = require("./postRoutes");
const router = express.Router();

router.post("/event/:postId/:userId/new", eventCtrl.createEvent); // pour cree les events
router.get("/event/:userId/postId", eventCtrl.getAllPostIdUser); //init page profil get postid impliquant le user

router.patch("/event/update", eventCtrl.editEvent); //edit event
router.delete("/event/:postId/:userId/cancel", eventCtrl.deleteEvent); //cancel event
router.post("/event/send/request", eventCtrl.eventRequest);
router.patch("/event/:postId/:userId/validate", eventCtrl.eventValidate);
router.patch("/event/:userId/decline", eventCtrl.eventDecline);
router.post("/user/event", eventCtrl.getUserEvent);
router.get("/event/getEvents/postId/:id", eventCtrl.getEventByPostId); //PROFIL USER .all

module.exports = router;
