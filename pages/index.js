import Head from "next/head";
import Card from "../components/card/Card";
import CardRow from "../components/cardRows/CardRow";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-300 font-mono h-[100vh]">
      <Head>
        <title>Blog app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="m-5">
        <Card />
        <CardRow />
      </div>
    </div>
  );
}
