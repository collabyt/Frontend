const baseUrl = 'http://localhost:8080/api/v1/playlists';

export function getPlaylists(limit, offset) {
  return `${baseUrl}?limit=${limit}&offset=${offset}`;
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
