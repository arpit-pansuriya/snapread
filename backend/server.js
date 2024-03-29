const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db.js");
const { errorHandler, notFound } = require("./middleware/error.js");

// Import routes
const userRoutes = require("./routes/user.js");
const productRoutes = require("./routes/product.js");

const orderRoutes = require("./routes/order.js");

dotenv.config();

connectDB();

const app = express();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = 5001;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
);
