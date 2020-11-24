const baseUrl = 'http://localhost:8080/api/v1/playlists';

export function getPlaylists() {
  return `${baseUrl}?limit=10&offset=0`;
}

export function getPlaylistById(playlistId) {
  return `${baseUrl}/${playlistId}`;
}

export function addNewVideoPlaylist(playlistId) {
  return `${baseUrl}/${playlistId}/videos`;
}
