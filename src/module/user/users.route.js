
const express = require('express');
const router = express.Router();
const {createUser,loginUser,getAllUser,getMe,refreshTokenUser} = require('./user.Controller');
const { chackUserToken, chackAdminToken} = require('../../middleware/auth');

router.post('/create', createUser);

router.post('/login', loginUser);

router.post('/refresh-token',refreshTokenUser);

router.get('/get-uers', chackAdminToken,getAllUser); 

router.get('/me', chackUserToken,getMe);

module.exports = router;
