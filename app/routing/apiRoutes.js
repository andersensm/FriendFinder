var femaleFriends = require("../data/femaleFriends");
var maleFriends = require("../data/maleFriends");

module.exports = function(app) {

  app.get("/api/maleFriends", function(req, res) {
    res.json(maleFriends);
  });

  app.post("/api/maleFriends", function(req, res) {
      maleFriends.push(req.body);
      res.json(true);
  });

  app.get("/api/femaleFriends", function(req, res) {
    res.json(femaleFriends);
  });

  app.post("/api/femaleFriends", function(req, res) {
      femaleFriends.push(req.body);
      res.json(true);
  });

}
