import Head from "next/head";
import Card from "../components/card/Card";
import CardRow from "../components/cardRows/CardRow";
import Header from "../components/Header";

export default function Home() {
  let img =
    "https://static01.nyt.com/images/2021/11/01/climate/00cli-methane1/00cli-methane1-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

  let cardTitle =
    "Global Leaders Vow to Limit Methane Emissions and Save Forests";

  let cardDescription =
    "Nations around the world joined togetheron Tuesday to impose new curbs on methane, a potent greenhouse gas.Facing pressure...";

  let rowTitle = "Nations pledged to end deforestation...";

  return (
    <div className="bg-gray-300 font-mono">
      <Head>
        <title>Blog app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="m-5">
        <div className="md:flex justify-center md:space-x-5">
          <Card title={cardTitle} description={cardDescription} img={img} />
          <Card title={cardTitle} description={cardDescription} img={img} />
        </div>
        <br />

        <div className="p-2 flex justify-center md:justify-between">
          <div className="border-2 border-gray-400">
            <div className="hidden md:block md:border-b-2 border-gray-400">
              <CardRow title={rowTitle} />
            </div>
            <div>
              <div className="border-b-2 md:border-b-0 border-gray-400">
                <CardRow title={rowTitle} />
              </div>
              <div className="md:hidden">
                <div className="border-b-2 border-gray-400">
                  <CardRow title={rowTitle} />
                </div>
                <CardRow title={rowTitle} />
              </div>
            </div>
          </div>

          <div className="hidden md:block ml-5">
            <div className="md:border-2 border-t-2 border-gray-400">
              <CardRow title={rowTitle} />
            </div>
            <div className="md:border-2 border-gray-400">
              <CardRow title={rowTitle} />
            </div>
          </div>
        </div>

        <br />
        <div className="md:flex justify-center md:space-x-5">
          <Card title={cardTitle} description={cardDescription} img={img} />
          <Card title={cardTitle} description={cardDescription} img={img} />
        </div>
        <br />
        <div className="p-2 flex justify-center md:justify-between">
          <div className="border-2 border-gray-400">
            <div className="hidden md:block md:border-b-2 border-gray-400">
              <CardRow title={rowTitle} />
            </div>
            <div>
              <div className="border-b-2 md:border-b-0 border-gray-400">
                <CardRow title={rowTitle} />
              </div>
              <div className="md:hidden">
                <div className="border-b-2 border-gray-400">
                  <CardRow title={rowTitle} />
                </div>
                <CardRow title={rowTitle} />
              </div>
            </div>
          </div>

          <div className="hidden md:block ml-5">
            <div className="md:border-2 border-t-2 border-gray-400">
              <CardRow title={rowTitle} />
            </div>
            <div className="md:border-2 border-gray-400">
              <CardRow title={rowTitle} />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center">
        Made by Sajawal Hassan class 5 test project.
      </h1>
    </div>
  );
}
