const express = require("express");
const connect = require("./src/utils/connect");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const AppRouter = require("./src/Routes");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", AppRouter);

app.listen(port , async () => {
  try {
    const dbConnected = await connect.MongoDb();
    if (!dbConnected) throw new Error("Server Connection Failed (db Error)");
    console.log("Server Running on Port at " + port)
  } catch(err) {
    console.log(err)
  }
})