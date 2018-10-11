import mongoose from 'mongoose';
import rndString from "randomstring";

var name = require('../package.json');
//mongodb will connect to localhost/projectname

var db = mongoose.connect('mongodb://localhost/'+name.name);
mongoose.Promise = global.Promise;

var RoomsSchema = mongoose.Schema({
  code: {type : String},
  ideaList: [{
    idea: {type: String}
  }],
  subject: {type: String}
});

var Rooms = mongoose.model("rooms", RoomsSchema);

exports.Rooms = Rooms;

export default db;
