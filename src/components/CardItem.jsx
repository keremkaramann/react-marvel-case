const CardItem = () => {
  return (
    <div className="rounded-xl shadow-lg mt-10 mb-10 hover:scale-105 duration-300 ease-in-out cursor-pointer">
      <img
        src="../../public/standard_incredible.jpg"
        alt=""
        className="w-72 rounded-t-xl"
      />
      <div className="flex justify-between items-center font-bold">
        <p className="text-3xl mt-5 mb-5 ml-2">DeadPool</p>
        <p className="mr-2">Click for details...</p>
      </div>
    </div>
  );
};
export default CardItem;
