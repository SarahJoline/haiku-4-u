const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/haikus", (req, res) => {
    db.Haikus.find()
      .then((haiku) => {
        res.json(haiku);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/posted", (req, res) => {
    console.log('POSTED!');
    
    db.Haikus.create({
      subject: req.body.subject,
      author: req.body.author,
      text: req.body.text
    }).then((posted) => {
      res.json(posted);
    }).catch((err) => {
      res.json(err);
    });
  });

module.exports = router;