import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-[100vh] bg-gray-300 font-mono">
      <Head>
        <title>Blog app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Card />
    </div>
  );
}
