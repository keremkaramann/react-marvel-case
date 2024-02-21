import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import { fetchHeroes } from "../store/actions/characterListReducerAction";

const HeroList = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((store) => store.heroList?.heroes?.data?.results);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <section className="bg-slate-950">
      <div className="flex justify-center">
        <img
          src="../../public/desktop-wallpaper-marvel-heroes-marvel-heroes-for-v-marvel-logo.jpg"
          className="h-56"
          alt="Marvel Logo"
        />
      </div>
      <form className="flex gap-5 mt-10 justify-center items-center">
        <label htmlFor="site-search" className="text-3xl text-white">
          Search for heroes:
        </label>
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="search"
          className="text-xl border-2 p-2 rounded-xl shadow-2xl shadow-sky-950"
        />
        <button
          className="py-3 px-8 text-white font-xl border-2 border-red-700 rounded-xl
         bg-red-700 hover:text-red-700 hover:bg-white duration-500 ease-in-out"
        >
          Search
        </button>
      </form>
      //carItems
      <div className="flex justify-center flex-wrap gap-5 items-center mt-12 max-w-[1500px] mx-auto">
        {heroes &&
          heroes?.map((hero) => {
            const { id, name, thumbnail } = hero;
            return <CardItem key={id} name={name} thumbnail={thumbnail} />;
          })}
      </div>
    </section>
  );
};
export default HeroList;
