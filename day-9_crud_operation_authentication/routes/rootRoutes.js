const express = require("express");
const router = express.Router();
const app = express();
const controller = require("../controllers/rootControllers");
const userAuth = require("../middleware/verifyAuth");

router.get("/", userAuth, controller.getUsers);
router.get("/img", controller.getUsers);
router.get("/:id", controller.getSingleUser);
router.post("/", controller.createUser);
router.put("/update/:id", controller.updateUser);
router.delete("/delete/:id", controller.deleteUser);

router.post("/signup", controller.signup);
router.post("/login", controller.login);

module.exports = router;
