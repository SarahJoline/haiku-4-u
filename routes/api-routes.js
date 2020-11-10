const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/haikus", (req, res) => {
  db.Haikus.find()
    .sort({ timestamp: -1 })
    .then((haiku) => {
      res.json(haiku);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/posted", (req, res) => {
  db.Haikus.create({
    subject: req.body.subject,
    author: req.body.author,
    text: req.body.text,
  })
    .then((posted) => {
      res.json(posted);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete", (req, res) => {
  db.Haikus.findByIdAndDelete(req.params._id)
    .then((haiku) => {
      res.json(haiku);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
