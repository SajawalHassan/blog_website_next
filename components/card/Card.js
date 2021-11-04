function cards({ title, description, img }) {
  return (
    <div
      className="p-2 border-2 border-gray-400 rounded-lg
  bg-gray-350 text-center m-5"
    >
      <div
        className="cursor-pointer hover:text-gray-200
transition-all duration-300"
      >
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
      <img className="rounded-lg mx-auto" src={img} alt="" />
    </div>
  );
}

export default cards;
