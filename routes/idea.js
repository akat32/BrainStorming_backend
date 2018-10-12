module.exports = idea

function idea(app, Rooms) {
  app.post('/idea', async(req,res)=>{
    var result = await Rooms.update({code: req.body.code}, {$push: {ideaList: req.body.idea}})
    if(!result.ok) return res.status(500).json({message: "ERR!"})
    else return res.status(200).json({message: "success!"})
  })
  .post('/delIdea', async(req,res)=>{
    var result = await Rooms.update({code: req.body.code}, {$pull: {ideaList: req.body.idea}})
    if(!result.ok) return res.status(500).json({message: "ERR!"})
    else return res.status(200).json({message: "success!"})
  })
  .post('/getIdea', async(req,res)=>{
    var result = await Rooms.findOne({code: req.body.code})
    if(!result) return res.status(404).json({message: "Rooms Not Found!"})
    else return res.status(200).json({list: result.ideaList})
  })
}
