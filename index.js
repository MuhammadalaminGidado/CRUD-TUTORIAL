require("dotenv").config();

// constants
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();
let port = process.env.PORT;
let mongoURI = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

// connect to mongoose
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database succesfully connected...");
    app.listen(3000 || port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to database....");
    console.error(err);
  });
