function CardOption({ img, title, description }) {
  return (
    <div className="p-2 mb-3 border-2 border-gray-400 rounded-lg bg-gray-350">
      <div className="cursor-pointer hover:text-gray-200 transition-all duration-150">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default CardOption;
