const { artist } = require('../models');
const db = require('../models')

const Artist = db.artist;
const Op = db.Sequelize.Op;
const User = db.users;

//Methods to perform crud operations
exports.saveArtist = (req,res)=>{
    console.log("Save Artist is called")
}

exports.getAllArtists = (req,res)=>{
    console.log("getAll Artists is called")
}

exports.getAllArtistForUser = async (req,res)=>{
    console.log("getAllArtistForUser is called")
    const userId = req.query.userId;
    console.log(userId)
    const tracks = await Artist.findAll({where:{userId:userId}})
    res.status(200).json(tracks)
}

exports.saveArtistForUser = async (req,res)=>{
    console.log("SaveArtistForUser is called")
    const userId = req.body.userId;
    const artist = req.body.artist;
    const user = await User.findOne({ where: { id: userId } })
    user.createArtist(artist).then(response=>{
        res.status(200).json(response)
    },error=>{
        console.log(error)
    })
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