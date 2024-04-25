const express = require("express");
const router = express.Router();
const {
  authUser,
  authEventOrg,
  authAdmin,
} = require("../middleware/authMiddleware");
const {
  getUsers,
  updateUser,
  deleteUserById,
  updateUserById,
} = require("../controllers/userController");

//Patch
router.patch("/update", authUser, updateUser);
router.patch("/update/:id", updateUserById);
app.get("/getUsers", getUsers);

//Delete
// router.delete("/delete/:id", authAdmin, deleteUserById);

module.exports = router;
