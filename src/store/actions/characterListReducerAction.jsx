export const FETCH_HEROES = "FETCH_HEROES";

export const setHeroes = (data) => ({
  type: FETCH_HEROES,
  payload: data,
});
