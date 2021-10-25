import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Chrono } from "react-chrono";
import dynamic from "next/dynamic";
const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });
import data from "../public/data/dataCultural.js";

const horizCultural = () => {

    let nombres = [];
    let datos = data;

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

                        <li><Link href="/horizBeneficios"><a>Beneficios</a></Link></li>

                        <li><Link href="/horizAcademico" ><a>Academico</a></Link></li>

                        <li><Link href="/horizFuncionarios" ><a>Funcionarios</a></Link></li>

                        <li><Link href="/horizCultural" ><a>cultural</a></Link></li>

                        <li><Link href="/horizOtros" ><a>Otros</a></Link></li>
                    </ul>
                    <span class="btn-menu">
                        <i class="fa fa-bars"></i>
                    </span>


                </nav>

                <h2>CULTURAL</h2>

                <div className="container">

                    <main>
                        <div className="time-line-container">
                            <TimeLine data={datos} />
                        </div>
                    </main>
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

export default horizCultural;