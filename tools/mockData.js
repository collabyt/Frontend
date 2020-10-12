const videosDB = require("./db-data/videos-data");
const playlistsDB = require("./db-data/playlists-data");
const keywordsDB = require("./db-data/keywords-data");

const playlists = playlistsDB.playlists;
const videos = videosDB.videos;
const keywords = keywordsDB.keywords;

const newPlaylist = {
  id: null,
  publicId: "",
  name: "",
  isPublic: false,
  passPhrase: "",
  words: [],
  videos: []
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newPlaylist,
  playlists,
  videos,
  keywords
};
