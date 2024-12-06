const router = require("express").Router();
const { createClass, updateClass} = require("../../controllers/class.controller");

router.post("/createClass", createClass);
/*router.get("/class", getAllClass);
router.delete("/deleteClass", deleteClass);*/
router.put("/updateClass/:id", updateClass);

module.exports = router