import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import randomstring from 'randomstring';
import fs from 'fs';
import axios from 'axios';

//external module setting


let app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)
//module setting
import {Rooms} from './mongo';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//router setting
require('./routes/roomcode')(app, Rooms, randomstring);
require('./routes/room')(app, Rooms, io)
//router setting


http.listen(3000, ()=>{
  console.log('Server on 3000!')
})
