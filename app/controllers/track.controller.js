const db = require('../models')

const Track = db.track;
const Op = db.Sequelize.Op;
const Album = db.album

//Methods to perform crud operations
exports.saveTrack = async (req,res)=>{
    console.log("Save Track is called")
    const albumId = req.body.albumId;
    const track = req.body.track;
    const album = await Album.findOne({ where: { id: albumId } })
    if (album) {
        console.log(album)
        album.createTrack(track).then(response => {
            res.status(200).json(response)
        }, error => {
            res.status(400).json({"message":"Some Error occured"})
            console.log(error)
        })
    }
}

exports.getAllTracks =async (req,res)=>{
    console.log("getAll Tracks is called")
    const albumId = req.query.albumId;
    const tracks = await Track.findAll({where:{albumId:albumId}})
    res.status(200).json(tracks);
}

exports.getTracksById =async (req,res)=>{
  console.log("get Track by Id is called")
  const albumId = req.query.albumId;
  const trackId = req.query.trackId;
  const tracks = await  Track.findAll({where:{albumId:albumId,id:trackId}})
  res.status(200).json(tracks)
}

exports.deleteAllTracks = (req,res)=>{
    console.log("Delete All Tracks is called")
}

exports.deleteTrackById = async (req,res)=>{
    console.log("Delete Track By Id is called")
    const trackId = req.params.id
    const status = await Track.destroy({where:{id:trackId}})
    if(status){
      res.status(200).json({"message":"Delete Success"})
    }
    res.status(400).json({"message":"Delete Failed"})
}

exports.updateTrack = (req,res)=>{
    console.log("update Track is called")
}
