const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

// router.get("/", getGoals);
// router.post("/", setGoals);
// both can be replaced by
router.route("/").get(protect, getGoals).post(protect, setGoals);

// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);
// both can be replaced by
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;
