var render = require("./list_render.js");
var requestHelper = require("../helpers/request_helper.js")
var onSelect = function(event) {
  var addition = {name: this.value};

  requestHelper.post("http://localhost:3000/api/countries", function(result){
    render.list(result);
  }, addition)
}


var formCall = function() {
  var form = document.getElementById("country-selector");
  form.addEventListener("change", onSelect);
}


module.exports = formCall;
