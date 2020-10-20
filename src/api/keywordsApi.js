import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:3001/keywords";

export function getKeywords() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function createKeyword(keyword) {
  return fetch(baseUrl, {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(keyword)
  })
    .then(handleResponse)
    .catch(handleError);
}
