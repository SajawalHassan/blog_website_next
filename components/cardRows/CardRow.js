function CardRow({ title }) {
  return (
    <div>
      <h1
        className="text-lg font-extrabold mt-2 cursor-pointer hover:text-gray-400
         transition-all duration-150 md:font-normal"
      >
        {title}
      </h1>
    </div>
  );
}

export default CardRow;
