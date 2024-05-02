const express = require("express");
const router = express.Router();
const multer = require("multer");
const {} = require("../middleware/authMiddleware");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const {
  uploadToGCP,
  createEvent,
  getAllEvent,
  deleteEventById,
  updateEventById,
  uploadAsset,
  getEventById,
  reserveEventById,
} = require("../controllers/eventController");

//Patch
// router.patch("/update", authUser, updateUser);
// router.patch("/update/:id", updateUserById);

router.put("/createevent", createEvent);
router.post("/getallevent", getAllEvent);
router.delete("/deleteevent/:eventId", deleteEventById);
router.patch("/updatebyid/:eventId", updateEventById);
router.post("/geteventbyid/:eventId", getEventById);
router.post("/reserveeventbyid/:eventId", reserveEventById);
router.post("/upload-image/:eventid", upload.single("image"), uploadAsset);

//Delete
// router.delete("/delete/:id", authAdmin, deleteUserById);

module.exports = router;
