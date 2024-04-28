import axios from 'axios';
const url = 'https://api.themoviedb.org/3/authentication';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTM4MjUwMDNlMjA5NDlhNGM1MjE3ZDQxMWMyNTZiMCIsInN1YiI6IjY2MmU3ZmE4Y2NkZTA0MDEyNWVhZjY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fCAmeYlb1Cj5jMGy1irIQqZSTGOvRlvks7bSrHeJHBU',
  },
};
export async function searchFilms() {
  return axios.get(url, options);
}
