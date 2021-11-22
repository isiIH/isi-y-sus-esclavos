import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { CalendH, dataH } from "../public/data/calendario";

const inicioHorizontal = () => {
    const router = useRouter();

    const b1 = <>
        <button className="boton" onClick={() => setBool(!bool)}>
            Ver todos los eventos
        </button>
    </>

    const b2 = <>
        <button className="boton" onClick={() => setBool(!bool)}>
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
                    <div className="time-line-container">
                        <p id="sin-eventos">No se han encontrado eventos para esta fecha, pruebe pulsando "ver todos los eventos"<br/>
                        Debe desplazarse hacia la izquierda para ver los eventos anteriores</p>
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
        <div className="contenedor-principal">
            <Head>
                <title>Calendario Académico</title>
                <link rel="icon" href="/images/uach.png" />
            </Head>

            <main>


                <h1 className="title">Calendario Académico UACH 2021</h1>

                <header>
                    <input type="checkbox" id="btn-menu"></input>
                    <ul id="volver-1-horizontal" className="volver">
                        <li><a href="/"> Volver</a></li>
                    </ul>
                    <label for="btn-menu"><img width="30px" src="images/imgmenu.png"></img></label>
                    <nav className="menu">
                    
                        <ul>
                            <li><a href="/inicioHorizontal?filtro=todos">Todo</a></li>
                            <li id="semestre"><a>Semestre</a>
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
                    <ul id = "volver-2-horizontal" className="volver" >
                        <li><a href="/"> Volver</a></li>
                    </ul>
                </header>

                <div className="botones">
                    <button className="boton" onClick={() => setTiempo("week")}>
                        Semana
                    </button>
                    <button className="boton" onClick={() => setTiempo("month")}>
                        Mes
                    </button>
                    <button className="boton" onClick={() => setTiempo("year")}>
                        Año
                    </button>
                    {mostrar}
                </div>

                {calendH}

    
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

export default inicioHorizontal;