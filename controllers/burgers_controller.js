var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObj = {
      burgers : data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burgerName], function() {
    res.redirect("/");
  })
})

module.exports = router;
