import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { CalendH } from "../public/data/calendario";

const inicioHorizontal = () => {
    const router = useRouter();

    const [calendH, setCalendH]=useState();
    
    useEffect(() => {
        if(router.query.filtro != undefined){
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
                        <li><a href="/inicioHorizontal?filtro=todos">Todo</a></li>

                        <li><a>Semestre</a>
                            <ul>
                                <li><a href="/inicioHorizontal?filtro=1">Semestre 1</a></li>
                                <li><a href="/inicioHorizontal?filtro=2">Semestre 2</a></li>
                            </ul>
                        </li>

                        <li><a href="/inicioHorizontal?filtro=beneficios">Beneficios</a></li>

                        <li><a href="/inicioHorizontal?filtro=academico">Académico</a></li>

                        <li><a href="/inicioHorizontal?filtro=funcionarios">Funcionarios</a></li>

                        <li><a href="/inicioHorizontal?filtro=cultural">Cultural</a></li>

                        <li><a href="/inicioHorizontal?filtro=otros">Otros</a></li>

                    </ul>

                </nav>
                
                <button><Link href="/" ><a>Volver</a></Link></button>

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

export default inicioHorizontal;