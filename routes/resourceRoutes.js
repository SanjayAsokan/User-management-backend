const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { allowRoles } = require('../middleware/roleMiddleware');
const { createResource, getResources, updateResource, deleteResource } = require('../controllers/resourceController');

// Create (Admin, Moderator)
router.post('/', verifyToken, allowRoles('admin', 'moderator'), createResource);

// Read (All users)
router.get('/', verifyToken, getResources);

// Update (Admin, Moderator)
router.put('/:id', verifyToken, allowRoles('admin', 'moderator'), updateResource);

// Delete (Admin only)
router.delete('/:id', verifyToken, allowRoles('admin'), deleteResource);

module.exports = router;
