// const express = require('express');
// const router = express.Router();
// const ctrl = require('../controllers/userController');

// router.post('/', ctrl.createUser);
// router.get('/', ctrl.listUsers);

// module.exports = router;

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middleware/auth');

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.get('/', verifyToken, isAdmin, ctrl.listUsers); // Admin only

module.exports = router;
