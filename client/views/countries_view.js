var requestHelper = require("../helpers/request_helper");
var render = require("./list_render.js");

var viewer = {};

viewer.start = function (){
  requestHelper.getRequest("https://restcountries.eu/rest/v2/all", function(countries){
    render.dropDown(countries);
  });

  requestHelper.getRequest("http://localhost:3000/api/countries", function(data){
    render.list(data);
  })
}




module.exports = viewer;
