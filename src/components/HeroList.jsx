import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { fetchHeroes } from "../store/actions/characterListReducerAction";
import ScrollToTop from "../components/ScrollToTop";

const HeroList = () => {
  const dispatch = useDispatch();
  const heroes = useSelector((store) => store.heroList?.heroes?.data?.results);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  return (
    <section className="bg-slate-950">
      <ScrollToTop />
      <div className="flex justify-center">
        <img
          src="../../public/marvelLogo.png"
          className="h-80"
          alt="Marvel Logo"
        />
      </div>
      <form className="flex gap-5 justify-center items-center flex-wrap">
        <label htmlFor="site-search" className="text-3xl text-white">
          Search for heroes:
        </label>
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="search"
          className="text-xl border-2 p-2 rounded-xl shadow-xl shadow-sky-800"
        />
        <button
          className="py-3 px-8 text-white font-xl border-2 border-red-700 rounded-xl
         bg-red-700 hover:text-red-700 hover:bg-white duration-500 ease-in-out"
        >
          Search
        </button>
      </form>
      //carItems
      <div className="flex justify-center flex-wrap gap-10 items-center mt-10 max-w-[1200px] mx-auto px-4">
        {heroes?.length > 0 ? (
          heroes?.map((hero) => {
            const { id, name, thumbnail } = hero;
            return (
              <Link to={`/detail/${id}`} key={id}>
                <CardItem name={name} thumbnail={thumbnail} />;
              </Link>
            );
          })
        ) : (
          <div className="bg-slate-950 mt-12">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-red-500" />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroList;
