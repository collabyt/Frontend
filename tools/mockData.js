import { videos as _videos } from './db-data/videos-data';
import { playlists as _playlists } from './db-data/playlists-data';
import { keywords as _keywords } from './db-data/keywords-data';

const playlists = _playlists;
const videos = _videos;
const keywords = _keywords;

const newPlaylist = {
  id: null,
  publicId: '',
  name: '',
  isPublic: false,
  passPhrase: '',
  words: [],
  videos: [],
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
export default {
  newPlaylist,
  playlists,
  videos,
  keywords,
};
