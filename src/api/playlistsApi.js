const baseUrl = 'http://localhost:3001/playlists';

export function getPlaylists() {
  return baseUrl;
}

export function getPlaylistById(playlistId) {
  return `${baseUrl}/${playlistId}`;
}

export function addNewVideoPlaylist(playlistId) {
  return `${baseUrl}/${playlistId}/videos`;
}
