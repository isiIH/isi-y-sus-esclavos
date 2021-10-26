import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
//import dynamic from "next/dynamic";
//const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });
//import data from "../public/data/data2.js";
import { useRouter } from "next/router";
import {Chrono} from "react-chrono";
import { Calendario,Prueba } from "../public/data/calendario";

const Index = () => {
    const router = useRouter();
    let f = router.query.filtro;
    if(f == undefined){
        f = "todos";
    }
    console.log(f);

    /*const calend = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("todos")} 
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
    </>

    const calend2 = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("1")} 
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
    </>

    const calend3 = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("2")} 
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
    </>

    const calend4 = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("beneficios")} 
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
    </>

    const calend5 = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("academico")} 
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
    </>

    const calend6 = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("funcionarios")} 
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
    </>

    const calend7 = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("cultural")} 
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
    </>

    const calend8 = <>
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba("otros")} 
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
    </>*/

    const [state, setState]=useState();

    useEffect(() => {setState(
        Calendario(f)
    )},[f]);

    //let nombres = [];
    //let datos = data;

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

                {/*<div className="container">

                    <main>
                        <div className="time-line-container">
                            <TimeLine data={datos} />
                        </div>
                    </main>
                </div>*/}

                {state}

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