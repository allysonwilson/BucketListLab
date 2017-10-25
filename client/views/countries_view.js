var requestHelper = require("../helpers/request_helper");
var render = require("./list_render.js");

var viewer = {};

viewer.start = function (){
  requestHelper.getRequest("https://restcountries.eu/rest/v2/all", function(countries){
    render.dropDown(countries);
  })
  
}




module.exports = viewer;
