const User = require('../models/User');

// Get real-time stats for Dashboard cards and Chart.js
exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ status: 'Active' });
    
    // Mock analytics for the Chart.js line/bar charts
    const chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      sales: [12000, 15000, 11000, 18000, 22000, 25000],
      signups: [50, 80, 45, 90, 120, 150]
    };

    res.json({ totalUsers, activeUsers, chartData });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching analytics' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

exports.toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.status = user.status === 'Active' ? 'Blocked' : 'Active';
    await user.save();
    res.json({ message: `User is now ${user.status}`, user });
  } catch (err) {
    res.status(500).json({ message: 'Update failed' });
  }
};