var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin } = require("../controllers/auth");

//signup
router.post(
    "/signup",
    [
        check("name", "name should be at least 3 char").isLength({ min: 3 }),
        check("email", "email is required").isEmail(),
        check("password", "password should be at least 3 char").isLength({
            min: 3,
        }),
    ],
    signup
);

//signin
router.post(
    "/signin",
    [
        check("email", "email is required").isEmail(),
        check("password", "password field is required").isLength({ min: 1 }),
    ],
    signin
);

//signout
router.get("/signout", signout);

module.exports = router;
