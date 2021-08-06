
const id = 27;
const api_key = '4c45353d0b0f2bc31eb42adc0c3f18be';
const baseUrl = 'https://api.themoviedb.org/4/discover/movie';

export default function getUrl() {
  const url = `${baseUrl}?api_key=${api_key}&with_genres=${id}&page=`;
  return url;
}