var MongoClient = require("mongodb").MongoClient;

var queryHelper = {
  url: "mongodb://localhost:27017/bucket_list",

//index route
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var countryCollection = db.collection("countries");

      countryCollection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      })
    })
  },
  //create route
  save: function(countryData, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var countryCollection = db.collection("countries");

      countryCollection.insert(countryData);

      countryCollection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      })
    })
  }
}

module.exports = queryHelper;
