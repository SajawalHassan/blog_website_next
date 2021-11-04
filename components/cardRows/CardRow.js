function CardRow({ title }) {
  return (
    <div>
      <h1
        className="text-lg font-extrabold cursor-pointer 
hover:text-gray-400 transition-all duration-150 md:font-normal
row-border-b"
      >
        {title}
      </h1>
    </div>
  );
}

export default CardRow;
