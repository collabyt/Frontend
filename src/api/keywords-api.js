const baseUrl = 'http://localhost:8080/api/v1/keywords';

export function getKeywords(word) {
  return `${baseUrl}?likewise=${word}`;
}

export function postKeywords() {
  return `${baseUrl}`;
}