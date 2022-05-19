const { response } = require('express');
const db = require('../models')

const Album = db.album;
const Op = db.Sequelize.Op;
const User = db.users;

//Methods to perform crud operations
exports.saveAlbum = async (req, res) => {
    console.log("Save Album is called")
}

exports.getAllAlbums =async (req, res) => {

}

exports.getAlbumById = async (req, res) => {
    console.log("get Album by Id is called")

}

exports.deleteAlbumById =async (req, res) => {
}

exports.deleteAllAlbum = (req, res) => {
    console.log("Delete All Albums is called")
}

exports.searchAlbums = async (req,res)=>{
    const userId = req.query.userId;
    const searchKey = req.query.key;
    console.log(userId)
    console.log(searchKey)
    const albums = await Album.findAll({
      where: {
        [Op.and]:{
          name: {
              [Op.like]: '%' + searchKey + '%'
          },
          userId: userId
        }
        }
      })
    res.status(200).json(albums)
}


exports.updateAlbum = (req, res) => {
    console.log("update Album is called")
}
