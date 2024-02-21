const CardItem = ({ name, thumbnail }) => {
  return (
    <div
      className="rounded-t-3xl shadow-2xl mt-10 mb-10 
    hover:scale-105 duration-300 ease-in-out cursor-pointer 
    w-72 h-96 hover:shadow-sky-500 bg-slate-300"
    >
      <img
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt=""
        className="rounded-t-xl h-3/4 w-full"
      />
      <div className="flex justify-between items-center font-bold">
        <p className="text-2xl mt-5 mb-5 ml-2">{name}</p>
        <p className="mr-2">Click for details...</p>
      </div>
    </div>
  );
};
export default CardItem;
