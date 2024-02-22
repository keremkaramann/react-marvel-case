import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeroes } from "../store/actions/characterListReducerAction";
import ScrollToTop from "../components/ScrollToTop";

const HeroList = () => {
  const dispatch = useDispatch();
  const [searchHero, setSearchHero] = useState("");
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);
  const heroes = useSelector((store) => store.heroList?.heroes?.data?.results);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchHeroes(searchHero));
  };

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
          value={searchHero}
          onChange={(e) => {
            setSearchHero(e.target.value);
          }}
        />
        <button
          className="py-3 px-8 text-white font-xl border-2 border-red-700 rounded-xl
         bg-red-700 hover:text-red-700 hover:bg-white duration-500 ease-in-out"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      //carItems
      <InfiniteScroll
        dataLength={items.length}
        //next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loader />}
      >
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
            <Loader />
          )}
        </div>
      </InfiniteScroll>
    </section>
  );
};
export default HeroList;
