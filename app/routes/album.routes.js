module.exports = app => {
    const albums = require('../controllers/album.controller.js');
    var router = require("express").Router();

    router.post("/album",albums.saveAlbum)
    router.post("/album/addTrack",albums.addTrackToAlbum)
    router.get("/album/all",albums.getAllAlbums)
    router.get("/album/:id",albums.getAlbumById)
    router.delete("/album/all",albums.deleteAllAlbum)
    router.delete("/album/:id",albums.deleteAlbumById)
    router.put("/album",albums.updateAlbum)

    app.use('/api/v1', router);
}
