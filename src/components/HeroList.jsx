import { useEffect } from "react";

const HeroList = () => {
  useEffect(() => {}, []);
  return (
    <section>
      <div className="flex justify-center">
        <img
          src="../../public/desktop-wallpaper-marvel-heroes-marvel-heroes-for-v-marvel-logo.jpg"
          className="h-56"
          alt="Marvel Logo"
        />
      </div>
      <form className="flex gap-5 mt-5 justify-center items-center">
        <label htmlFor="site-search" className="text-3xl">
          Search for heroes:
        </label>
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="search"
          className="text-xl border-2 p-2 rounded-xl"
        />
        <button
          className="py-3 px-8 text-white font-xl border-2 border-red-700 rounded-xl
         bg-red-700 hover:text-red-700 hover:bg-white duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </section>
  );
};
export default HeroList;
