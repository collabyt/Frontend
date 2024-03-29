const baseUrl = 'http://localhost:8080/api/v1/playlists';

export function getPlaylists(limit, offset) {
  return `${baseUrl}?limit=${limit}&offset=${offset}`;
}

export function postPlaylists() {
  return `${baseUrl}`;
}

export function getPlaylistByPublicid(publicid) {
  return `${baseUrl}/${publicid}`;
}

export function addNewVideoPlaylist(publicId) {
  return `${baseUrl}/${publicId}/videos`;
}

export function authPrivatePlaylist(publicId) {
  return `http://localhost:8080/api/v1/auth/${publicId}`;
}
