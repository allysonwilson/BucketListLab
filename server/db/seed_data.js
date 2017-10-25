use bucket_list;

db.dropDatabase();

db.countries.insert([
  {
    name: "Tahiti"
  },
  {
    name: "Estonia"
  },
  {
    name: "Japan"
  }
])
