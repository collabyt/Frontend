import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:3001/playlists";

export function getPlaylists() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function savePlaylist(playlist) {
  return fetch(baseUrl + "/" + (playlist.id || ""), {
    method: playlist.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(playlist)
  })
    .then(handleResponse)
    .catch(handleError);
}