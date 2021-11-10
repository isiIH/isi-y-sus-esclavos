import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { CalendH, dataH } from "../public/data/calendario";

const inicioHorizontal = () => {
    const router = useRouter();

    const b1 = <>
        <button onClick={() => setBool(!bool)}>
            Ver todos los eventos
        </button>
    </>

    const b2 = <>
        <button onClick={() => setBool(!bool)}>
            Ver eventos según la fecha
        </button>
    </>

    const [calendH, setCalendH] = useState();
    const [bool, setBool] = useState(false);
    const [mostrar, setMostrar] = useState(b1);
    const [tiempo, setTiempo] = useState("month");
    
    useEffect(() => {
        if(router.query.filtro != undefined){
            var data = dataH(router.query.filtro,bool);
            if(data.length != 0){
                setCalendH(CalendH(data,tiempo));
            } else {
                setCalendH(
                    <div className="sin-eventos">
                        No se han encontrado eventos para esta fecha, pruebe pulsando "ver todos los eventos"<br/>
                        Debe desplazarse hacia la izquierda para ver los eventos anteriores
                    </div>
                );
            }
            if(bool == true){
                setMostrar(b2);
            } else {
                setMostrar(b1);
            }
        }
    },[router.query.filtro,tiempo,bool]);

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

                <button onClick={() => setTiempo("week")}>
                    Semana
                </button>
                <button onClick={() => setTiempo("month")}>
                    Mes
                </button>
                <button onClick={() => setTiempo("year")}>
                    Año
                </button>
                {mostrar}

                {calendH}
                
                <div className="tooltip">Descripcion:
                    <span className="tooltiptext">uwu</span>
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

export default inicioHorizontal;