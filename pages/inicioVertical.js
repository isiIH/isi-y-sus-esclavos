import Head from "next/head";
import Link from "next/link";
import React from "react";
import {Chrono} from "react-chrono";
import data2 from "../public/data/data.js";
import dynamic from "next/dynamic";
const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });
import data from "../public/data/data2.js";

const inicioVertical = () => {

    let nombres = [];
    let datos = data;

    return (
        <div className="container">
            <Head>
                <title>Calendario Académico</title>
                <link rel="icon" href="/uach.png" />

                <script src="app.js" defer></script>
            </Head>

            <main>



                <h1 className="title">Calendario Académico UACH 2021</h1>


                <nav className="menu">
                    <label className="logo">Calendario UACh</label>
                    <ul className="menu-items">
                        <li><Link href="/" ><a>Inicio</a></Link></li>

                        <li><Link href="/beneficios"><a>Beneficios</a></Link></li>

                        <li><Link href="/academico" ><a>Academico</a></Link></li>

                        <li><Link href="/funcionarios" ><a>Funcionarios</a></Link></li>

                        <li><Link href="/cultural" ><a>Cultural</a></Link></li>

                        <li><Link href="/otros" ><a>Otros</a></Link></li>
                    </ul>
                    <span class="btn-menu">
                        <i class="fa fa-bars"></i>
                    </span>


                </nav>



                <div style={{ width: "900px", height: "700px" }}>
                    <Chrono 
                        items={data2} 
                        enableOutline
                        //slideShow
                        useReadMore={false}
                        cardHeight="100px"
                        theme={{ 
                            primary: "black",
                            secondary: "orange",
                            cardBgColor: "#8fbbaf",
                            cardForeColor: "black",
                            titleColor: "black"
                        }}
                        mode="VERTICAL_ALTERNATING"
                    />
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

export default inicioVertical;