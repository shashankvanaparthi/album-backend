const db = require('../models')

const Artist = db.artist;
const Op = db.Sequelize.Op;

//Methods to perform crud operations
exports.saveArtist = (req,res)=>{
    console.log("Save Artist is called")
}

exports.getAllArtists = (req,res)=>{
    console.log("getAll Artists is called")
}

exports.getArtistById = (req,res)=>{
    console.log("get Artist by Id is called")
}

exports.deleteAllArtist = (req,res)=>{
    console.log("Delete All Artist is called")
}

exports.deleteArtistById = (req,res)=>{
    console.log("Delete Artist By Id is called")
}

exports.updateArtist = (req,res)=>{
    console.log("update Artist is called")
}