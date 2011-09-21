HOST = null;
PORT = 8080;

var server = require("./restify");

server.listen(PORT, HOST);

//REST calls...

server.on('/people/{pId}/{gId}', function(req, res, pId, gId) {
	var result = 'pId: '+pId+' gId: '+gId;
	res.simpleText(200, result);
}, 'GET');

server.on('/people/{guid}', function(req, res, guid) {
	res.simpleText(200, 'id: '+guid);
}, 'GET');

server.on('/people/{guid}', function(req, res, guid) {
	var person = JSON.parse(req.data.toString('utf8'));
    person.name = req.query;
    person.id = guid;   
	res.simpleJSON(200, person);
}, 'POST');


// Static content on disk...

server.on("/images/img.png", server.staticHandler("icons/person.png"), 'GET');

server.on("/images/{id}", server.staticHandler("icons/{id}"), 'GET');

server.on("/{folder}/{id}", server.staticHandler("{folder}/{id}"), 'GET');