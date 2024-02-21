import axios from "axios";
export const FETCH_HEROES = "FETCH_HEROES";

const date = Date.now().toString;
const baseUrl = `${import.meta.env.VITE_BASE_URL}/v1/public/characters`;
const publicKey = import.meta.env.VITE_PUBLIC_API;
const privateKey = import.meta.env.VITE_PRIVATE_API;
const hash = getHash();
let url = ``;

export const setHeroes = (data) => ({
  type: FETCH_HEROES,
  payload: data,
});

export const fetchRoles = () => () => {
  axios
    .get("roles")
    .then((res) => {
      dispatch(setHeroes(res.data));
    })
    .catch((err) => {
      console.error("Error fetching roles: ", err);
    });
};
