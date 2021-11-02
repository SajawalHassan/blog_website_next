import CardRowOption from "./CardRowOption";

function CardRow() {
  return (
    <div className="border-b-4 border-gray-400 mb-5">
      <CardRowOption title="Nations pledged to end deforestation by 2030 in a bid to protect the “lungs...”" />
      <CardRowOption title="Corporate climate pledges often ignore a key factor: supply chains..." />
      <CardRowOption title="What is a “carbon footprint”? Plus, 12 other climate buzzwords." />
    </div>
  );
}

export default CardRow;
