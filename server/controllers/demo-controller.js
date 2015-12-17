var db = require('../models/demo');

module.exports.contactlistPost = function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function (err, doc) {
    res.json(doc);
  });
};

module.exports.contactlistGET = function (req, res) {
  console.log('GET request');
  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
}

module.exports.delete = function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: db.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
}

module.exports.contactlistPUT = function (req, res) {
  var id = req.params.id;

  console.log(req.body.name);
  db.contactlist.findAndModify({query: {_id: db.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new : true}, function (err, doc) {
    res.json(doc);
  })
}

module.exports.contactlistFIND = function (req, res) {
  var id = req.params.id;
  console.log('edit id: ' + id);
  db.contactlist.findOne({_id: db.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
}
