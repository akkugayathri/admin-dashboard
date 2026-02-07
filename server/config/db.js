const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // We use process.env to hide your credentials when you upload to GitHub
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Cloud MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1); // Stop the server if DB fails
  }
};

module.exports = connectDB;