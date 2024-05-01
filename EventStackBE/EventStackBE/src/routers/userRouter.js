const express = require("express");
const router = express.Router();
const {
  authUser,
  authEventOrg,
  authAdmin,
} = require("../middleware/authMiddleware");
const { getUsers, updateEventOrg } = require("../controllers/userController");

//Patch
// router.patch("/update", authUser, updateUser);
// router.patch("/update/:id", updateUserById);
router.get("/getuser", getUsers);
router.patch("/updateeventorg/:eventorganizerid", updateEventOrg);

//Delete
// router.delete("/delete/:id", authAdmin, deleteUserById);

module.exports = router;
