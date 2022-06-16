const db = require('../models')

const Track = db.track;
const Op = db.Sequelize.Op;
const Album = db.album;
const User = db.users;

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

exports.saveTrackForUser = async (req,res) =>{
    console.log("SaveTrackForUser is called")
    const userId = req.body.userId;
    const track = req.body.track;
    const user = await User.findOne({ where: { id: userId } })
    user.createTrack(track).then(response=>{
        res.status(200).json(response)
    },error=>{
        console.log(error)
    })
}

exports.getAllTracks =async (req,res)=>{
    console.log("getAll Tracks is called")
    const albumId = req.query.albumId;
    const tracks = await Track.findAll({where:{albumId:albumId}})
    res.status(200).json(tracks);
}

exports.getAllTracksForUser = async (req,res)=>{
    console.log("getAllTracksForUser is called")
    const userId = req.query.userId;
    console.log(userId)
    const tracks = await Track.findAll({where:{userId:userId}})
    res.status(200).json(tracks)
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
    }else{
        res.status(400).json({"message":"Delete Failed"})
    }
}

exports.deleteTrackFromAlbum = async (req,res)=>{
    console.log("DeleteTrackFromAlbum is called");
    const albumId = req.query.albumId;
    const trackId = req.query.trackId;
    console.log("AlbumId: ",albumId,"TrackId: ",trackId);
    const album = await Album.findByPk(albumId)
    if(!album){
        console.log("Album Not Found")
        res.status(404).json({"message":"Album Not Found"})
    }

    const track = await Track.findByPk(trackId);
    if(!track){
        console.log("Track Not Found");
        res.status(404).json({"message":"Track Not Found"})
    }
    await album.removeTrack(track);
    res.status(200).json(album);
}

exports.updateTrack =async (req,res)=>{
    console.log("update Track is called")
    const userId = req.body.userId;
    const track = req.body.track;
    console.log(track)
    const response = await Track.update({name:track.name,link:track.link,duration:track.duration},{where:{id:track.id,userId:userId}})
    if(response>0){
        res.status(200).json({"message":"Update Successful"})
    }else{
        res.status(400).json({"error":"Something went wrong"})
    }
}
