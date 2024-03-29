import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchHeroes } from "../store/actions/characterListReducerAction";
import marvelLogo from "../../public/marvelLogo.png";
//components
import Loader from "./Loader";
import CardItem from "./CardItem";
import ScrollToTop from "../components/ScrollToTop";

const HeroList = () => {
  const dispatch = useDispatch();
  const [searchHero, setSearchHero] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [limit, setLimit] = useState(30);
  const heroes = useSelector((store) => store.heroList?.heroes?.data?.results);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchHeroes(searchHero));
    setHasMore(false);
  };
  const fetchMoreData = () => {
    setLimit(limit + 30);
  };
  useEffect(() => {
    dispatch(fetchHeroes(searchHero, limit));
  }, [limit]);

  return (
    <section className="bg-slate-950">
      <ScrollToTop />
      <div className="flex justify-center">
        <img src={marvelLogo} className="h-80" alt="Marvel Logo" />
      </div>
      <form className="flex gap-5 justify-center items-center flex-wrap">
        <label
          htmlFor="site-search"
          className="text-3xl text-white"
          data-cy="label-title"
        >
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
          data-cy="input-field"
        />
        <button
          className="py-3 px-8 text-white font-xl border-2 border-red-700 rounded-xl
          bg-red-700 hover:text-red-700 hover:bg-white duration-500 ease-in-out"
          onClick={handleSearch}
          data-cy="search-btn"
        >
          Search
        </button>
      </form>
      <InfiniteScroll
        dataLength={heroes?.length || 0}
        style={{ overflowY: "hidden" }}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center">
            <Loader />
          </div>
        }
        endMessage={<p>You have seen it all</p>}
      >
        <div
          className="flex justify-center flex-wrap gap-10 items-center
          mt-8 max-w-[1200px] mx-auto px-4"
        >
          {heroes?.map((hero) => {
            const { id, name, thumbnail } = hero;
            return (
              <Link to={`/detail/${id}`} key={id}>
                <CardItem name={name} thumbnail={thumbnail} />;
              </Link>
            );
          })}
        </div>
      </InfiniteScroll>
    </section>
  );
};
export default HeroList;
