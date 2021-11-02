function CardRowOption({ title }) {
  return (
    <div className="border-t-2 border-gray-400 my-3">
      <h1
        className="text-xl font-extrabold mt-2 cursor-pointer hover:text-gray-400
         transition-all duration-150"
      >
        {title}
      </h1>
    </div>
  );
}

export default CardRowOption;
