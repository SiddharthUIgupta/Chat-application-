var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');// ye ui k liye, index.html fetch karega
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){// isse jab b koi msg browser m type karega to wo dikhega cnsole m
    console.log('message: ' + msg);
  })
  console.log('a user connected');
  socket.on('disconnect', function(){
  console.log('user disconnected');//ye disconnecct k liye
});
});

http.listen(3000, function(){
  console.log('listening on * :3000');
});
