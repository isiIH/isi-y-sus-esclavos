import Head from "next/head";
import Link from "next/link";

const Index = () => {
    return (
        <div className="container">
        <Head>
            <title>Calendario Académico</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

            <h1 className="title">Calendario UACH 2021</h1>

            <p className="description">
                Seleccione orientación del calendario.
            </p>

            <div className="grid">
                <Link href="/inicioVertical?filtro=todos">
                    <a className="card">Vertical</a>
                </Link>
                <Link href="/inicioHorizontal?filtro=todos">
                    <a className="card">Horizontal</a>
                </Link>
            </div>
        </main>

        <footer>
            <a href="https://github.com/isiIH/isi-y-sus-esclavos" target="_blank">
                Repositorio
            </a>
            <Link href="/about">
                <a>Sobre esta página</a>
            </Link>
        </footer>
    </div>
    );
};

export default Index;