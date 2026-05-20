const { Signup, Login, Logout } = require("../controllers/authController.js");
const {UserVerification} = require("../middleware/authMiddleware.js")
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/verify', UserVerification);
router.post("/logout", Logout)

module.exports = router;