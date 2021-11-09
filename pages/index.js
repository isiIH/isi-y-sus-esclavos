import Head from "next/head";
import Link from "next/link";

const Index = () => {
    return (
        <div className="contenedor-principal">
        <Head>
            <title>Calendario Académico</title>
            <link rel="icon" href="/images/uach.png" />
        </Head>

        <main>

            <h1 className="titulo">Calendario UACH 2021</h1>

            <p className="descripcion">
                Seleccione orientación del calendario.
            </p>

            <div className="contenedor-imagenes">
                
                
                <Link href="/inicioHorizontal?filtro=todos">
                    <div className="img-1">
                        <p className="texto-descripcion-img">Este calendario es recomendado para PC.</p>
                        <img className="img-calendario-horizontal" src="/images/calendH.png">
                            
                        </img>
                    </div>
                </Link>
                    
                <Link href="/inicioVertical?filtro=todos">
                    <div className="img-1">
                        <p className="texto-descripcion-img">Este calendario es recomendado para dispositivos móviles.</p>
                        <img className="img-calendario-vertical" src="/images/calendV.png">
                            
                        </img>
                    </div>
                </Link>
            </div>
        </main>

        <footer>
            <a href="https://github.com/isiIH/isi-y-sus-esclavos" target="_blank">
                Repositorio
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