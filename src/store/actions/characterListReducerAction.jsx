import axios from "axios";
import md5 from "md5";
export const FETCH_HEROES = "FETCH_HEROES";

const baseUrl = `${import.meta.env.VITE_BASE_URL}/v1/public/characters`;
const publicKey = import.meta.env.VITE_PUBLIC_API;
const privateKey = import.meta.env.VITE_PRIVATE_API;

export const setHeroes = (data) => ({
  type: FETCH_HEROES,
  payload: data,
});

export const fetchHeroes = (searchHero) => (dispatch) => {
  const limit = 30;
  const offset = 0;
  const ts = Date.now().toString();
  const hash = md5(`${ts}${privateKey}${publicKey}`);

  let requestUrl;

  if (searchHero) {
    requestUrl = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${searchHero}`;
  } else {
    requestUrl = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;
  }

  axios
    .get(requestUrl)
    .then((res) => {
      dispatch(setHeroes(res.data));
    })
    .catch((err) => {
      console.error("Error fetching roles: ", err);
    });
};
