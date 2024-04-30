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
  return await axios.get(`${url}`, options);
}
