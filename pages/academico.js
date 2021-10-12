import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Chrono } from "react-chrono";
/*import dynamic from "next/dynamic";
const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });*/
import dataAcademico from "../public/data/dataAcademico.js";

const academico = () => {



    return (
        <div className="container">
            <Head>
                <title>Calendario Académico</title>
                <link rel="icon" href="/uach.png" />

                <script src="https://kit.fontawesome.com/c1eae85dfa.js" crossorigin="anonymous"></script>
                <script src="app.js" defer></script>
            </Head>

            <main>



                <h1 className="title">Calendario Académico UACH 2021</h1>


                <nav class="menu">
                    <label class="logo">Calendario UACh</label>
                    <ul class="menu-items">
                        <li><Link href="/" ><a>Inicio</a></Link></li>

                        <li><Link href="/beneficios" ><a>Beneficios</a></Link></li>

                        <li><Link href="/academico" ><a>Academico</a></Link></li>

                        <li><Link href={{
                            pathname: "/response",
                            query: { opt: 0 },
                        }}><a href="#">Funcionarios</a></Link></li>

                        <li><Link href={{
                            pathname: "/response",
                            query: { opt: 0 },
                        }}><a href="#"> Cultural</a></Link></li>

                        <li><Link href={{
                            pathname: "/response",
                            query: { opt: 0 },
                        }}><a href="#">Otros</a></Link></li>
                    </ul>
                    <span class="btn-menu">
                        <i class="fa fa-bars"></i>
                    </span>


                </nav>

                <h2>ACADEMICO</h2>

                <div style={{ width: "900px", height: "700px" }}>
                    <Chrono
                        items={dataAcademico}
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

export default academico;