
const express = require('express');
const router = express.Router();
const {createUser,loginUser,getAllUser,getMe,refreshTokenUser} = require('./user.controller');
const { checkUserToken, checkAdminToken } = require('../../middleware/auth');

router.post('/create', createUser);

router.post('/login', loginUser);

router.post('/refresh-token',refreshTokenUser);

router.get('/get-users', checkAdminToken,getAllUser); 

router.get('/me', checkUserToken, getMe);



module.exports = router;
