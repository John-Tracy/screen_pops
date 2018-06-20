var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	PORT = process.env.PORT || 3005;

var htmlRoutes = require('./routes/static_routes'),
	socketRoutes = require('./sockets/socket_emissions.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(htmlRoutes);


app.use(express.static('./public/'));

let http = require('http').Server(app);
let socket = require('socket.io')(http);

require('./sockets/socket_emissions')(socket);

// Starts the server 
// =============================================================
http.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});