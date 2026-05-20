const { Signup, Login, Logout } = require("../Controllers/AuthController.js");
const {UserVerification} = require("../middleware/AuthMiddleware.js")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/verify', UserVerification);
router.post("/logout", Logout)

module.exports = router;