const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require("./routes/rootRoutes");

//connectDB - database connect
const connectDb = require("./config/db");
connectDb();

app.use("/user", routes);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
