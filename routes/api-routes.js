const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/haikus", (req, res) => {
  console.log("GETTING HAIKUS!");

  db.Haikus.find()
    .sort({ timestamp: -1 })
    .then((haiku) => {
      console.log("GOT HAIKUS!");
      res.json(haiku);
    })
    .catch((err) => {
      console.log("FAILED TO GET HAIKUS!");

      res.json(err);
    });
});

router.post("/posted", (req, res) => {
  db.Haikus.create({
    subject: req.body.subject,
    author: req.body.author,
    authorID: req.body.authorID,
    text: req.body.text,
  })
    .then((posted) => {
      res.json(posted);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  db.Haikus.findByIdAndDelete(req.params.id)
    .then((haiku) => {
      res.json(haiku);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
