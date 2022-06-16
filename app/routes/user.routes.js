module.exports = app => {
    const users = require('../controllers/user.controller.js');
    var router = require("express").Router();

    router.post("/signup",users.signup)
    router.post("/login",users.login)
    router.get("/user/:id",users.getUserDetails)
    router.put("/user/:id",users.updateUserDetails)
    router.post("/user/forgotpassword",users.forgotPassword)
    router.post("/user/verifyandupdatePassword",users.verifyAndUpdatePassword)

    app.use('/api/v1', router);
}