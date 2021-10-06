import Head from "next/head";
import dynamic from "next/dynamic";
const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });

const About = () => {
  let nombres = [];
  let eventos = 20;

  for (let i = 0; i < eventos; i++) {
    nombres[i] = i;
  }

  let d1 = new Date();
  let d2 = new Date();
  d2.setDate(d2.getDate() + 5);
  let d3 = new Date();
  d3.setDate(d3.getDate() + 8);
  let d4 = new Date();
  d4.setDate(d4.getDate() + 20);
  let data = [
    {
      id: 1,
      start: d1,
      end: d2,
      name: "Demo Task 1"
    },
    {
      id: 2,
      start: d3,
      end: d4,
      name: "Demo Task 2",
      color: "orange"
    }
  ];
  return (
    <div className="container">
      <Head>
        <title>Calendario academico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Calendario Academico 2021</h1>
        <div className="time-line-container">
          <TimeLine data={data} />
        </div>
      </main>
    </div>
  );
};
export default About;
