const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonName,
  updatePersonId,
  deletePersonId,
} = require("../controller/people");

// 1st Method
// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonName);

// router.put("/:id", updatePersonId);

// router.delete("/:id", deletePersonId);

// 2nd Method (More cleaner)
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonName);
router.route("/:id").put(updatePersonId).delete(deletePersonId);

module.exports = router;
