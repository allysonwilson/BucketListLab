var render = {}

render.dropDown = function(array) {
  var mainDiv = document.getElementById("country-list");
  var select = document.createElement("select");

  var firstOption = document.createElement("option");
  firstOption.innerText = "Add a country to your Bucket List";
  firstOption.selected = true;
  firstOption.disabled = true;

  select.appendChild(firstOption);

  for (var item of array) {
    var option = document.createElement("option");
    option.innerText = item.name;
    select.appendChild(option);
  }

  mainDiv.appendChild(select);
}




module.exports = render;
