var render = {}

render.dropDown = function(array) {
  var select = document.getElementById("country-selector");

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

}

render.list = function(array) {
  var div = document.getElementById("saved-data");
  while(div.firstChild){div.removeChild(div.firstChild)}

  var ol = document.createElement("ol");

  for (var item of array) {
    var listItem = document.createElement("li")
    listItem.innerText = item.name;
    ol.appendChild(listItem);
  }

  div.appendChild(ol);
}



module.exports = render;
