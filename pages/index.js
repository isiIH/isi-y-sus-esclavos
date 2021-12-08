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
                        <img className="img-calendario-horizontal" src="/images/img-1.png" 
                            alt="Calendario horizontal"/>
                        <div class="image__overlay image__overlay--primary">
                            <div class="image__title">Calendario Horizontal</div>
                            <p class="image__description">
                                Recomendado para pc.
                            </p>
                        </div>
                    </div>
                </Link>
                    
                <Link href="/inicioVertical?filtro=todos">
                    <div className="img-2">
                        <img className="img-calendario-vertical" src="/images/img-2.png" 
                        alt="Calendario vertical"/>
                        <div class="image__overlay image__overlay--primary">
                            <div class="image__title">Calendario Vertical</div>
                            <p class="image__description">
                                Recomendado para dispositivos móviles.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </main>

        <footer>
            <a href="https://github.com/isiIH/isi-y-sus-esclavos" target="_blank">
                Repositorio
            </a>
            <p>&nbsp;-&nbsp;</p>
            <a href="/creditos" target="_blank">
                Créditos
            </a>
        </footer>
    </div>
    );
};

export default Index;