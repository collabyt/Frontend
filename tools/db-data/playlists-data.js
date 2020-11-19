const videosDB = require('./videos-data');
const keywordsDB = require('./keywords-data');

const { videos } = videosDB;
const { keywords } = keywordsDB;

const playlists = [
  {
    id: 1,
    publicId: '',
    name: 'Criação de Jogos com Defold',
    isPublic: false,
    passPhrase: 'MY_Lua_Defold',
    words: [keywords[4], keywords[5], keywords[13], keywords[14]],
    videos: videos.slice(0, 12),
  }, {
    id: 2,
    publicId: '',
    name: 'Meteoro, necessários',
    isPublic: true,
    passPhrase: 'My_news_Meteoro',
    words: [keywords[1], keywords[2], keywords[9], keywords[10], keywords[12]],
    videos: videos.slice(12, 25),
  }, {
    id: 3,
    publicId: '',
    name: 'BBC - Noticias de politica recentes',
    isPublic: true,
    passPhrase: 'My_news_BBC',
    words: [keywords[0], keywords[1], keywords[6], keywords[8], keywords[11]],
    videos: videos.slice(24, 37),
  }, {
    id: 4,
    publicId: '',
    name: 'Nerdologia - Historia',
    isPublic: false,
    passPhrase: 'Playlist com videos de Historia do canal Nerdologia',
    words: [keywords[3], keywords[6], keywords[8], keywords[1]],
    videos: videos.slice(-12),
  },
];

module.exports = { playlists };
