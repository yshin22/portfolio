const mongoose = require("mongoose");
const db =
  "mongodb+srv://scarh54:LcIbCECZCJ6wa9m8@portfolio.my5ks.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio";
/* Replace <password> with your database password */

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;