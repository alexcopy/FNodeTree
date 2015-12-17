
module.exports.db = {};
module.exports.mongojs = {};


module.exports.contactlistPost = function (req, res) {
  console.log(req.body);
  module.exports.db.contactlist.insert(req.body, function (err, doc) {
    res.json(doc);
  });
};

module.exports.contactlistGET = function (req, res) {
  console.log('GET request');
  module.exports.db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
}

module.exports.delete = function (req, res) {
  var id = req.params.id;
  var mongojs = module.exports.mongojs;
  console.log(id);
  module.exports.db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
}

module.exports.contactlistPUT = function (req, res) {
  var id = req.params.id;
  var mongojs = module.exports.mongojs;

  console.log(req.body.name);
  module.exports.db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new : true}, function (err, doc) {
    res.json(doc);
  })
}

module.exports.contactlistFIND = function (req, res) {
  var id = req.params.id;
  var mongojs = module.exports.mongojs;
  console.log('edit id: ' + id);
  module.exports.db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
}
