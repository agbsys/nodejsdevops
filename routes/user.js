const express = require('express');
const router = express.Router();
const login = require('../controller/authenticate/login');
const userController = require("../controller/users");

/* GET users listing. */
router.get('/', userController.getUsers);

/* Login user */
router.post('/login', function (req, res, next) {
const username = req.body.username;
    let loginResult = login(username, req.body.password);
    if (loginResult) {
        res.render('users', {username: username});
    }
    else {
        res.render('index', {error: true});
    }
});
module.exports = router;