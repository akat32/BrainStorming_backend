module.exports = roomcode;

function roomcode(app, Rooms, randomstring) {
  app.post('/issue', async(req,res)=>{ // 코드 발급
    var code = ''
    while(true) {
      code = randomstring.generate(6);
      let result = await Rooms.findOne({code: code})
      if(!result) break;
    }
    var new_room = {
      code: code,
      subject: req.body.subject
    }
    new_room = new Rooms(new_room)
    var result = await new_room.save()
    if(!result) return res.status(500).json({message: "ERR!"})
    else return res.status(200).json({code: code})
  })
  .post('/abrogate', async(req,res)=>{ // 룸 폐기
    var result = await Rooms.remove({code: req.body.code})
    if(!result.ok) return res.stauts(500).json({message: "ERR!"})
    else return res.status(200).json({message: "success!"})
  })
}
