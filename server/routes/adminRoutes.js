const express = require('express');
const router = express.Router();
const { getDashboardStats, getAllUsers, deleteUser, toggleUserStatus } = require('../controllers/adminController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// Protect all routes: only logged-in Admins can access these
router.use(verifyToken);
router.use(isAdmin);

router.get('/stats', getDashboardStats);
router.get('/users', getAllUsers);
router.delete('/user/:id', deleteUser);
router.patch('/user/status/:id', toggleUserStatus);

module.exports = router;