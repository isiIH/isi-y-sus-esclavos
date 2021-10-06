import Head from "next/head";
import data from "../public/data/data2.js";
import dynamic from "next/dynamic";
const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });

const About = () => {
  let nombres = [];
  let datos = data;

  return (
    <div className="container">
      <Head>
        <title>Calendario academico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Calendario Academico 2021</h1>
        <div className="time-line-container">
          <TimeLine data={datos} />
        </div>
      </main>
    </div>
  );
};
export default About;
