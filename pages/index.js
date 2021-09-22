import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>calen Academico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>


        <h1 className="title">2021</h1>

        <p className="description">
          Seleccione area de interes
        </p>

        <div className="grid">
          <Link
            href={{
              pathname: "/response",
              query: { opt: 0 },
            }}
          >
            <a className="card">Becas</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 1 },
            }}
          >
            <a className="card">Inscripciones</a>
          </Link>
          <Link
            href={{
              pathname: "/response",
              query: { opt: 2 },
            }}
          >
            <a className="card">Examenes</a>
          </Link>
        </div>
      </main>

      <footer>
        <a className="xd" href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
          La isi hizo esto.
        </a>
        &nbsp;-&nbsp;
        <Link href="/about">
          <a className="xd">Derechos Reservados 2021.</a>
        </Link>
      </footer>
    </div>
  );
};

export default Index;