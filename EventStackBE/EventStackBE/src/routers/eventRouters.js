const express = require("express");
const router = express.Router();
const {} = require("../middleware/authMiddleware");
const {
  uploadToGCP,
  createEvent,
  getAllEvent,
  deleteEventById,
  updateEventById,
} = require("../controllers/eventController");

//Patch
// router.patch("/update", authUser, updateUser);
// router.patch("/update/:id", updateUserById);

router.post("/createevent", createEvent);
router.post("/getallevent", getAllEvent);
router.delete("/deleteevent/:eventId", deleteEventById);
router.patch("/updatebyid/:eventId", updateEventById);

router.post("/upload-image", async (req, res) => {
  try {
    const { file, filename } = req.body;
    const url = await uploadToGCP(file, filename);
    res.json({ url });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Failed to upload image" });
  }
});
//Delete
// router.delete("/delete/:id", authAdmin, deleteUserById);

module.exports = router;
