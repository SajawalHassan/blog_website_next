import CardOption from "./CardOption";

function cards() {
  let img =
    "https://static01.nyt.com/images/2021/11/01/climate/00cli-methane1/00cli-methane1-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

  return (
    <div className="m-5 space-y-10">
      <CardOption
        img={img}
        title="Biden Administration Moves to Limit Methane, a Potent Greenhouse Gas"
        description="This is the description of a prop!"
      />

      <CardOption
        img={img}
        title="This is a prop!"
        description="This is the description of a prop!"
      />
    </div>
  );
}

export default cards;
