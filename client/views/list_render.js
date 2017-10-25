var render = {}

render.dropDown = function(array) {
  var div = document.getElementById("select");
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

  div.appendChild(select);
}

render.list = function(array) {
  var div = document.getElementById("saved-data");
  var ol = document.createElement("ol");

  for (var item of array) {
    var listItem = document.createElement("li")
    listItem.innerText = item.name;
    ol.appendChild(listItem);
  }

  div.appendChild(ol);
}



module.exports = render;
