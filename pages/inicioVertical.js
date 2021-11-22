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
        <div className="contenedor-principal">
            <Head>
                <title>Calendario Académico</title>
                <link rel="icon" href="/images/uach.png" />
            </Head>

            <main>


                <h1 className="title">Calendario Académico UACH 2021</h1>

                <header>
                    <input type="checkbox" id="btn-menu"></input>
                    <ul id="volver-1-vertical" className="volver">
                        <li><a href="/"> Volver</a></li>
                    </ul>
                    <label for="btn-menu"><img width="30px" src="images/imgmenu.png"></img></label>
                    <nav className="menu">
                        <ul>
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
                    <ul id = "volver-2-vertical" className="volver" >
                        <li><a href="/"> Volver</a></li>
                    </ul>
                </header>

                {calendV}


            </main>


            <footer>
                <a href="https://github.com/isiIH/isi-y-sus-esclavos" target="_blank">
                    La isi hizo esto
                </a>
                <p>&nbsp;-&nbsp; Derechos Reservados 2021.</p>
            </footer>
        </div>
    );
};

export default inicioVertical;