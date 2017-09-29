var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM table";
    connection.query(queryString, [table], function(err, data) {
        console.log(data);
        cb(data);
    })
  },
  insertOne: function(whatToInsert, table, col, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (??)";
    connection.query(queryString, [table, col, whatToInsert], function(err, data) {
      console.log(data);
      cb(data);
    })
  },
  updateOne: function(table, colOne, valOne, colTwo, valTwo, cb) {
    var queryString = "UPDATE " + table + " SET ??=? WHERE ??=?";
    console.log(queryString);
    connection.query(queryString, [colOne, valOne, colTwo, valTwo], function(err, data) {
      if(err) throw err;
      console.log(data);
      cb(data);
    })
  }
};

module.exports = orm;
