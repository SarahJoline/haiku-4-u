const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;
const app = express();

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("success!"))
  .catch((err) => console.log(err));

/*
 HOW TO CORS

 1. In your package.json for your react app, add "proxy": <server, for example http://localhost:5000>. This makes react go to this location for any routes it doesn't have, which is nice.
 2. In your node app add the cors library "npm i --save cors". 
 3. In your server.js, require cors. 
 4. In your server.js, tell the app to use cors. 
    CODE:
    app.use(cors());

 5. In your server.js, have all requests set a header with two things cors needs.
    CODE:
    app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
    next();

  Profit. Never stackoverflow how to do CORS again.
*/
const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});
// End of CORS stuff.

const apiRoutes = require("./routes/api-routes");
app.use("/api", apiRoutes);

// Serve static assets out of build directory.
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
