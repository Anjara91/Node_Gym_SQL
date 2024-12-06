const router = require("express").Router();

router.use("/client", require("./api/client.router"));
router.use("/class", require("./api/class.router"));

module.exports = router;