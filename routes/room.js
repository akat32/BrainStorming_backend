module.exports = room

function room(app, Rooms, io) {
  io.on('connection', (socket)=>{
    socket.on('join room', (name, room)=>{
     console.log(name + ' join in ' + room)
     var text = name + "님이 방에 들어왔습니다.";
     io.to(room).emit('welcome room', name, text);
     socket.join(room);
    })
    socket.on('leave room', (name, room)=>{
     console.log(name + ' : ' + room)
     var text = name + "님이 방에서 나갔습니다.";
     io.to(room).emit('goodbye room', name, text);
     socket.leave(room);
   })
   socket.on('send message', (name, index, room)=>{
      console.log(room + '. ' + name + ' : ' + index)
      var msg = name + ' : ' + index;
      var returnMsg = {
        "name" : name,
        "index" : index,
        "room" : room,
      }
      socket.broadcast.to(room).emit('receive message', returnMsg);
      //io.emit('receive message web', msg);
    })
    socket.on('disconnect', ()=>{
      console.log('user disconnect')
    })
  })
}
