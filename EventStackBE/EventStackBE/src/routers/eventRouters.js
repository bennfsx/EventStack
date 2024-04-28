const express = require("express");
const router = express.Router();
const {} = require("../middleware/authMiddleware");
const { uploadToGCP, createEvent } = require("../controllers/eventController");

//Patch
// router.patch("/update", authUser, updateUser);
// router.patch("/update/:id", updateUserById);

router.post("/createevent", createEvent);

//Delete
// router.delete("/delete/:id", authAdmin, deleteUserById);

module.exports = router;
