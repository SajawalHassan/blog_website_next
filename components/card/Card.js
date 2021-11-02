import CardOption from "./CardOption";

function cards() {
  let img =
    "https://static01.nyt.com/images/2021/11/01/climate/00cli-methane1/00cli-methane1-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

  return (
    <div className="space-y-5">
      <CardOption img={img} title="Title" description="Description" />
    </div>
  );
}

export default cards;
