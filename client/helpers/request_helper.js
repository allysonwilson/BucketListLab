var requestHelper = {
  getRequest: function (url, fishingLine) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.addEventListener('load', function(){
      var data = JSON.parse(this.responseText);
      fishingLine(data);
    })

    xhr.send();
  },

  post: function ( url, fishingLine, info) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    var stringToSubmit = JSON.stringify(info);

    xhr.addEventListener('load' , function() {
      var data = JSON.parse(this.responseText);
      fishingLine(data);
    })

    xhr.send(stringToSubmit);
  }
}

module.exports = requestHelper;
