import Head from "next/head";
import Card from "../components/card/Card";
import CardRow from "../components/cardRows/CardRow";
import Header from "../components/Header";

export default function Home() {
  let img =
    "https://static01.nyt.com/images/2021/11/03/us/03HP-Dems-promo-sub/03HP-Dems-promo-sub-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale";

  let cardTitle =
    "Rocked by Surprise Losses, Democrats Sound the Alarm for 2022";

  let cardDescription1 =
    "An array of Democrats pleaded with President Biden to address the quality-of-life issues that plagued their candidates in elections on Tuesday. Party officials say they must address concerns over the continuing pandemic and scarcity of goods or risk watching voters lurch back toward the G.O.P";

  let rowTitle1 = "In his bid for Virginia governor, Glenn Youngkin...";
  let rowTitle2 = "Murphy Narrowly Wins Re-election as New Jersey's...";
  let rowTitle3 = "Republicans have moved to galvanize voters...";
  let rowTitle4 = "Eric Adams is forging a clear message with...";

  return (
    <div className="bg-gray-300 font-mono">
      <Head>
        <title>Blog app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Card pair 1 */}
      <div className="md:flex-just">
        <Card title={cardTitle} description={cardDescription1} img={img} />
        <Card title={cardTitle} description={cardDescription1} img={img} />
      </div>

      {/* Card row 1 */}
      <div className="p-2 flex-just md:justify-between mx-5 space-x-14">
        <div>
          <CardRow title={rowTitle1} />
          <CardRow title={rowTitle2} />

          <div className="md:hidden">
            <CardRow title={rowTitle3} />
            <CardRow title={rowTitle4} />
          </div>
        </div>

        <div className="hidden md:block ml-5">
          <CardRow title={rowTitle3} />
          <CardRow title={rowTitle4} />
        </div>
      </div>

      {/* Card pair 2 */}
      <div className="md:flex-just">
        <Card title={cardTitle} description={cardDescription1} img={img} />
        <Card title={cardTitle} description={cardDescription1} img={img} />
      </div>

      {/* Card row 2 */}
      <div className="p-2 flex-just md:justify-between mx-5 space-x-14">
        <div>
          <CardRow title={rowTitle1} />
          <CardRow title={rowTitle2} />

          <div className="md:hidden">
            <CardRow title={rowTitle3} />
            <CardRow title={rowTitle4} />
          </div>
        </div>

        <div className="hidden md:block ml-5">
          <CardRow title={rowTitle3} />
          <CardRow title={rowTitle4} />
        </div>
      </div>

      <h1 className="text-center">
        Made by Sajawal Hassan class 5 test project.
      </h1>
    </div>
  );
}
