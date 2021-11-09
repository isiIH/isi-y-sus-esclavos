import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { CalendH } from "../public/data/calendario";
import items from "../public/data/calendario.json";

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
                <link rel="icon" href="/images/uach.png" />
            </Head>

            <main>

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

                <div className="links-items">
                    <Link href="/"><a>Página Principal</a></Link>
                    <p>&nbsp; &gt; Calendario Horizontal | &nbsp;</p>
                    <Link href="/inicioVertical?filtro=todos"><a>Ir a calendario vertical</a></Link>
                </div>

                {calendH}
                <ul className="legend">
                    <li><span className="beneficios" style={{ backgroundColor:items.leyenda[0].color }}></span>Beneficios</li>
                    <li><span className="academicos" style={{ backgroundColor:items.leyenda[1].color }}></span>Académico</li>
                    <li><span className="funcionarios" style={{ backgroundColor:items.leyenda[2].color }}></span>Funcionarios</li>
                    <li><span className="cultural" style={{ backgroundColor:items.leyenda[3].color }}></span>Cultural</li>
                    <li><span className="otros" style={{ backgroundColor:items.leyenda[4].color }}></span>Otros</li>
                </ul>
    
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