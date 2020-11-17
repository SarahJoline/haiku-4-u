const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const path = require("path");

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

const apiRoutes = require("./routes/api-routes");
app.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public/src/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "public", "src", "build", "index.html")
    );
  });
}

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
