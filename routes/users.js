const { Router } = require("express");
const router = Router();

const controller = require("../controller/userController");

router.get("/", controller.getUsers);
router.post("/", controller.createUser);
router.get("/:userId", controller.getUserById);

module.exports = router;
