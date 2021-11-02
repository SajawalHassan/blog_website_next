function CardOption({ img, title, description }) {
  return (
    <div className="p-2 border-2 border-gray-400 rounded-lg bg-gray-350">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>{description}</p>
      <img src={img} alt="" />
    </div>
  );
}

export default CardOption;
