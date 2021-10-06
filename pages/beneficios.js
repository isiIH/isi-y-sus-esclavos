import Head from "next/head";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });
import data from "../public/data/dataBeneficios.js";

const beneficios = () => {

    let nombres = [];
    let datos = data;

    return (
        <div className="container">
            <Head>
                <title>Calendario Académico</title>
                <link rel="icon" href="/favicon.ico" />

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

                        <li><Link href={{
                            pathname: "/response",
                            query: { opt: 0 },
                        }}><a href="#">Academico</a></Link></li>

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



                <div className="container">


                    <div className="time-line-container">
                        <TimeLine data={datos} />
                    </div>

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

export default beneficios;