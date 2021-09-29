import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const Index = () => {
    return (
    <div className="container">
    <Head>
        <title>Calendario Académico</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>


        <h1 className="title">Calendario Académico UACH 2021</h1>

        <p className="description">
        SELECCIONE AREA DE INTERES
        </p>

        <div className="grid">
        <Link
            href={{
            pathname: "/response",
            query: { opt: 0 },
            }}
        >
            <a className="card">Beneficios</a>
        </Link>
        <Link
            href={{
            pathname: "/response",
            query: { opt: 1 },
            }}
        >
            <a className="card">Académico</a>
        </Link>
        <Link
            href={{
            pathname: "/response",
            query: { opt: 2 },
            }}
        >
            <a className="card">Funcionarios</a>
        </Link>
        <Link
            href={{
            pathname: "/response",
            query: { opt: 2 },
            }}
        >
            <a className="card">Cultural</a>
        </Link>
        <Link
            href={{
            pathname: "/response",
            query: { opt: 2 },
            }}
        >
            <a className="card">Otros</a>
        </Link>
        </div>

    </main>

    <footer>
        <a className="xd" href="https://github.com/isiIH/isi-y-sus-esclavos" target="_blank">
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