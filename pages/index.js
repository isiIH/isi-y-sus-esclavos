import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { CalendV, CalendH } from "../public/data/calendario";

const Index = () => {
    const router = useRouter();

    const [calendV, setCalendV]=useState();
    const [calendH, setCalendH]=useState();
    
    useEffect(() => {
        if(router.query.filtro != undefined){
            setCalendV(CalendV(router.query.filtro));
            setCalendH(CalendH(router.query.filtro));
        }
    },[router.query.filtro]);

    return (
        <div className="container">
            <Head>
                <title>Calendario Académico</title>
                <link rel="icon" href="/uach.png" />

            </Head>

            <main>

                <h1 className="title">Calendario Académico UACH 2021</h1>


                <nav className="menu">
                    <label className="logo">Calendario UACh</label>
                    <ul className="menu-items">
                        <li><a href="/?filtro=todos">Todo</a></li>

                        <li><a>Semestre</a>
                            <ul>
                                <li><a href="/?filtro=1">Semestre 1</a></li>
                                <li><a href="/?filtro=2">Semestre 2</a></li>
                            </ul>
                        </li>

                        <li><a href="/?filtro=beneficios">Beneficios</a></li>

                        <li><a href="/?filtro=academico">Académico</a></li>

                        <li><a href="/?filtro=funcionarios">Funcionarios</a></li>

                        <li><a href="/?filtro=cultural">Cultural</a></li>

                        <li><a href="/?filtro=otros">Otros</a></li>

                    </ul>
                </nav>
                
                {calendV}

                {calendH}

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