import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTM4MjUwMDNlMjA5NDlhNGM1MjE3ZDQxMWMyNTZiMCIsInN1YiI6IjY2MmU3ZmE4Y2NkZTA0MDEyNWVhZjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fCAmeYlb1Cj5jMGy1irIQqZSTGOvRlvks7bSrHeJHBU';

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
// trending
export async function getTrendingFilms() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  return await axios.get(url, options);
}

// query
export async function getRequestedFilm(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  return await axios.get(url, options);
}

// id-details
export async function getFilmDetails(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  return await axios.get(url, options);
}
