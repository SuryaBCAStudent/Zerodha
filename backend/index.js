require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/authRoute");

const HoldingModel = require("./model/HoldingSchema");
const PositionModel = require("./model/PositionsSchema");
const OrderModel = require("./model/OrderSchema");

const app = express();
 const PORT = process.env.PORT || 5000;;
const MONGO_URL = process.env.MONGO_URL;


app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(express.json());
app.use(cookieParser());

// ✅ ROUTES
app.use("/", authRoute); // better structure

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hello World");
});

// HOLDINGS
app.get("/allholdings", async (req, res) => {
  const holdings = await HoldingModel.find({});
  res.json(holdings);
});

// POSITIONS
app.get("/allpositions", async (req, res) => {
  const positions = await PositionModel.find({});
  res.json(positions);
});

// ORDERS
app.post("/newOrder", async (req, res) => {
  const newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });

  await newOrder.save();
  res.send("Order saved");
});

// MONGODB
mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// SERVER
app.listen(PORT, () => {
  console.log("App started on port", PORT);
});