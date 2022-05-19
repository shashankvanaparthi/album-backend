module.exports = app => {
    const tracks = require('../controllers/track.controller.js');
    var router = require("express").Router();

    router.post("/track",tracks.saveTrack)
    router.get("/track/all",tracks.getAllTracks)
    router.get("/track/:id",tracks.getTracksById)
    router.delete("/track/all",tracks.deleteAllTracks)
    router.delete("/track/:id",tracks.deleteTrackById)
    router.put("/track",tracks.updateTrack)

    app.use('/api/v1', router);
}