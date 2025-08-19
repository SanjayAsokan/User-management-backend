const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { allowRoles } = require('../middleware/roleMiddleware');
const { getAllUsers, getProfile, updateProfile } = require('../controllers/userController');

// Admin only
router.get('/', verifyToken, allowRoles('admin'), getAllUsers);

// User profile
router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);

module.exports = router;
