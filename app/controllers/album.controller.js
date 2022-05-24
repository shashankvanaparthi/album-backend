const { response } = require('express');
const db = require('../models')

const Album = db.album;
const Op = db.Sequelize.Op;
const User = db.users;

//Methods to perform crud operations
exports.saveAlbum = async (req, res) => {
    console.log("Save Album is called")
    const userId = req.body.userId;
    const album = req.body.album;
    const user = await User.findOne({ where: { id: userId } })
    if (user) {
        console.log(user)
        user.createAlbum(album).then(response => {
            res.status(200).json(response)
        }, error => {
            res.status(400).json({"message":"Some Error occured"})
            console.log(error)
        })
    }
}

exports.getAllAlbums =async (req, res) => {
    const userId = req.query.userId;
    const albums = await Album.findAll({where:{userId:userId}})
    res.status(200).json(albums);
}

exports.getAlbumById = async (req, res) => {
    console.log("get Album by Id is called")
    const userId = req.query.userId;
    const albumId = req.query.albumId;
    const albums = await  Album.findAll({where:{userId:userId,id:albumId}})
    res.status(200).json(albums)
}

exports.deleteAlbumById =async (req, res) => {
    const albumId = req.params.id
    const status = await Album.destroy({where:{id:albumId}})
    if(status){
      res.status(200).json({"message":"Delete Success"})
    }
    res.status(400).json({"message":"Delete Failed"})
}

exports.deleteAllAlbum = (req, res) => {
    console.log("Delete All Albums is called")
}


exports.updateAlbum = (req, res) => {
    console.log("update Album is called")
}
