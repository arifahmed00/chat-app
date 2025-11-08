
const express = require('express');
const router = express.Router();
const {register,login,getAllUser} = require('./user.Controller');
const { chackUserToken, chackAdminToken} = require('../../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/get-uers',chackUserToken, chackAdminToken,getAllUser);    //for admin

module.exports = router;
