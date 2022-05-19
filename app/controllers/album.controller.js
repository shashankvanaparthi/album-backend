const db = require('../models')

const Album = db.album;
const Op = db.Sequelize.Op;

//Methods to perform crud operations
exports.saveAlbum = (req,res)=>{
    console.log("Save Album is called")
}

exports.getAllAlbums = (req,res)=>{
    console.log("getAll Albums is called")
}

exports.getAlbumById = (req,res)=>{
    console.log("get Album by Id is called")
}

exports.deleteAlbumById = (req,res)=>{
    console.log("Delete Albumby Id is called")
}

exports.deleteAllAlbum = (req,res)=>{
    console.log("Delete All Albums is called")
}

exports.updateAlbum = (req,res)=>{
    console.log("update Album is called")
}
