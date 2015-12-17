var ServerPort = 3004;
var contrlFolder = "/client/scripts/js";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fTreeController = require(__dirname + '/server/controllers/ftree-controller.js');
var demoController = require(__dirname + '/server/controllers/demo-controller.js');



app.use('/js', express.static(__dirname + contrlFolder));
app.use('/bower', express.static(__dirname + '/client/components'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/client/views/index.html")
});



app.get('/contactlist', demoController.contactlistGET);

app.post('/api/createTree', fTreeController.create);

app.post('/contactlist', demoController.contactlistPost);

app.delete('/contactlist/:id', demoController.delete);

app.get('/contactlist/:id', demoController.contactlistFIND);

app.put('/contactlist/:id', demoController.contactlistPUT);


app.listen(ServerPort);
console.log('Server is running on port: ' + ServerPort)