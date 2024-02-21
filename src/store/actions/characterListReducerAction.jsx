import axios from "axios";
export const FETCH_HEROES = "FETCH_HEROES";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL);

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
