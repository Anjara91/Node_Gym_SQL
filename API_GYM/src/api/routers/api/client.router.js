const router = require("express").Router();
const {getAll, createClient, getByName, registerUser, login, deleteUser} = require("../../controllers/client.controller");
const {checkToken} = require("../../../utils/middleware");
router.get("/", getAll);
router.post("/", createClient);
router.get("/getName", getByName);
router.post("/register", registerUser);
router.post("/login", login);
router.delete("/delete/:id", checkToken, deleteUser); //Para eliminar al cliente solo puede hacerlo un admin
module.exports = router

