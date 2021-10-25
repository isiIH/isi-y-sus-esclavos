import Head from "next/head";
import Link from "next/link";
const Index = () => {
    return (
        <div className="container">
        <Head>
            <title>INFO104 Nextjs App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

            <h1 className="title">Calendario UACH 2021</h1>

            <p className="description">
                Seleccione orientación del calendario.
            </p>

            <div className="grid">
                <Link
                    href={{
                        pathname: "/inicioVertical",
                        query: { opt: 0 },
                    }}
                >
                    <a className="card">Vertical</a>
                </Link>
                <Link
                    href={{
                        pathname: "/inicioHorizontal",
                        query: { opt: 1 },
                    }}
                >
                    <a className="card">Horizontal</a>
                </Link>
            </div>
        </main>

        <footer>
            <a href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
                Repositorio y tutorial
            </a>
            &nbsp;-&nbsp;
            <Link href="/about">
                <a>Sobre esta página</a>
            </Link>
        </footer>
    </div>
    );
};

export default Index;