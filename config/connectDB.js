const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected!!");
  } catch (error) {
    console.log("Database not connected!!");
  }
}

module.exports = connect;
