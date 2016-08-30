'use strict';

const Express = require('express');
const Server = Express();
const Path = require('path');
const BodyParser = require('body-parser');

Server.use(Express.static(Path.join(__dirname + '/assets')));

Server.use(BodyParser.urlencoded({
  extended: true,
  parameterLimit: 10000,
  limit: 1024 * 1024 * 10
}));

Server.get('/test', function(req, res){
  console.log("Hello.  Static Server is running");
  res.send("Hello.  Static Server is running");
});

// Server.use(BodyParser.json({
//   extended: false,
//   parameterLimit: 10000,
//   limit: 1024 * 1024 * 10
// }));

Server.get('/', function(req, res){
  res.sendFile(Path.join(__dirname + '/index.html'));
});

// FOR LIVE SERVER
if (module === require.main) {
  const server = Server.listen(process.env.PORT || 8003, function () {
    const port = server.address().port;
    console.log('Static Server listening on port %s', port);
  });
}


// FOR DEV SERVER
// Server.listen(8003, function(){
//   console.log('Server Running');
// });
