const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

dotenv.config()


const MONGO_URI = process.env.MONGODB_URI;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));


const apiRoutes = require("./routes/api-routes");

app.use("/api", apiRoutes);


app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
  });