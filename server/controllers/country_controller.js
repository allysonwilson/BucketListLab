var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var queryHelper = require("../db/query_helper.js");

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}));

router.get("/", function(req, res){
  queryHelper.all(function(countries){
    res.json(countries);
  })
})

router.post("/", function(req, res) {
  var countryInfo = req.body;
  queryHelper.save(countryInfo, function(updatedCountryList) {
    res.json(updatedCountryList);
  })
})

module.exports = router;
