var connection = require("./connection.js");
//-------------------------------------------------
//from cat app
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
//-------------------------------------------
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, data) {
        console.log(data);
        cb(data);
    })
  },
  insertOne: function(table, col, val, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (??)";
    connection.query(queryString, [table, col, val], function(err, data) {
      console.log(data);
      cb(data);
    })
  },
  updateOne: function(table, objVals, condition, cb) {

    var queryString = "UPDATE " + table + " SET " + objToSql(objVals) + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, function(err, data) {
      if(err) throw err;
      console.log(data);
      cb(data);
    })
  }
};

module.exports = orm;
