import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";

const HeroDetail = () => {
  const { id } = useParams();

  const heroes = useSelector((store) => store.heroList?.heroes?.data?.results);
  const foundHero = heroes?.find((hero) => hero.id == id);

  return (
    <section className="text-white mb-10">
      <div className="flex justify-evenly flex-wrap gap-10">
        <div className="border-2 border-red-600 rounded-full w-2/6 h-1/2 mt-10 ml-5">
          <img
            src={`${foundHero?.thumbnail?.path}.${foundHero?.thumbnail?.extension}`}
            alt="Hero Image"
            className="rounded-full w-full h-full"
          />
        </div>
        <div className="px-5">
          <div className="mt-20 mb-5 border rounded-full w-[100px]">
            <Link
              to={"/"}
              className="flex items-center gap-3 justify-center p-2 font-bold"
            >
              <p>Go Back</p>
              <IoReturnUpBack className="text-xl" />
            </Link>
          </div>
          <h1 className="font-bold text-3xl mb-3">
            Hero Name:{" "}
            {foundHero?.name.length === 0 ? "Not Found" : foundHero?.name}
          </h1>
          <p className="text-2xl max-w-[600px]">
            Description:{" "}
            {foundHero?.description.length === 0
              ? "Not Found"
              : foundHero?.description}
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-3 text-red-500">Comics :</h2>
            {foundHero?.comics?.items
              .sort((a, b) => {
                const getYear = (comic) => {
                  const match = comic.name.match(/\((\d{4})\)/);
                  return match ? parseInt(match[1]) : 0;
                };
                return getYear(b) - getYear(a);
              })
              .map((comic, index) => {
                return (
                  <ul
                    className="flex flex-col justify-center gap-10"
                    key={index}
                  >
                    <li>{comic.name}</li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroDetail;
