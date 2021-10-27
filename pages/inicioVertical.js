import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { CalendV } from "../public/data/calendario";

const inicioVertical = () => {
    const router = useRouter();

    const [calendV, setCalendV]=useState();
    
    useEffect(() => {
        if(router.query.filtro != undefined){
            setCalendV(CalendV(router.query.filtro));
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
                        <li><a href="/inicioVertical?filtro=todos">Todo</a></li>

                        <li><a>Semestre</a>
                            <ul>
                                <li><a href="/inicioVertical?filtro=1">Semestre 1</a></li>
                                <li><a href="/inicioVertical?filtro=2">Semestre 2</a></li>
                            </ul>
                        </li>

                        <li><a href="/inicioVertical?filtro=beneficios">Beneficios</a></li>

                        <li><a href="/inicioVertical?filtro=academico">Académico</a></li>

                        <li><a href="/inicioVertical?filtro=funcionarios">Funcionarios</a></li>

                        <li><a href="/inicioVertical?filtro=cultural">Cultural</a></li>

                        <li><a href="/inicioVertical?filtro=otros">Otros</a></li>

                    </ul>


                </nav>

                <button><Link href="/" ><a>Volver</a></Link></button>

                {calendV}


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