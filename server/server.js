const express = require("express");
const dotenv = require("dotenv");

const userRoutes = require("../server/routes/userRoutes");
const productRoutes = require("../server/routes/productRoutes");
const cartRoutes = require("../server/routes/cartRoutes");
const categoryRoutes = require("../server/routes/categoryRoutes");
const orderRoutes = require("../server/routes/orderRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const app = express(); // main thing
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

dotenv.config();

connectDB();

app.use(express.json()); // to accept json data
app.use(cors(corsOptions));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

// --------------------------deployment------------------------------
app.get("/", (req, res) => {
  res.send("API is running..");
});
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
