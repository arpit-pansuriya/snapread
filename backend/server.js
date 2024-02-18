const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db.js");

// Import routes
const userRoutes = require("./routes/user.js");

dotenv.config();

connectDB();

const app = express();

// Routes
app.use("/api/users", userRoutes);

const PORT = 5001;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
);
