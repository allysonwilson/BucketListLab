var countriesView = require("./views/countries_view.js")
var formCall = require("./views/form_caller.js")


var app = function () {

formCall()

countriesView.start();

}

window.addEventListener('DOMContentLoaded', app )
