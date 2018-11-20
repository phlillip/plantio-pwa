/* TODO: Read up on: */
// http://markdalgleish.com/2011/03/self-executing-anonymous-functions/

(function() {

  //const assert = require("assert");
  const client = require("mongodb").MongoClient;
  const config = require("../config");
  let _db;
  module.exports = {
    getDb,
    initDb
  };

})();