const baseUrl = 'http://localhost:8080/api/v1/playlists';

export function getPlaylists() {
  return `${baseUrl}?limit=10&offset=0`;
}

export function postPlaylists() {
  return `${baseUrl}`;
}

export function getPlaylistById(playlistId) {
  return `${baseUrl}/${playlistId}`;
}

export function addNewVideoPlaylist(publicId) {
  return `${baseUrl}/${publicId}/videos`;
}
