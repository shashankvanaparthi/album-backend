const db = require('../models')

const Track = db.track;
const Op = db.Sequelize.Op;

//Methods to perform crud operations
exports.saveTrack = (req,res)=>{
    console.log("Save Track is called")
}

exports.getAllTracks = (req,res)=>{
    console.log("getAll Tracks is called")
}

exports.getTracksById = (req,res)=>{
    console.log("get Track by Id is called")
}

exports.deleteAllTracks = (req,res)=>{
    console.log("Delete All Tracks is called")
}

exports.deleteTrackById = (req,res)=>{
    console.log("Delete Track By Id is called")
}

exports.updateTrack = (req,res)=>{
    console.log("update Track is called")
}