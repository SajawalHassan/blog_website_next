function CardRow({ title }) {
  return (
    <div>
      <h1
        className="text-lg font-extrabold hover-trans
         md:font-normal row-border-b"
      >
        {title}
      </h1>
    </div>
  );
}

export default CardRow;
