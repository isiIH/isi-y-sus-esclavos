import Head from "next/head";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import {Chrono} from "react-chrono";
//import data2 from "../public/data/data.js";
import dynamic from "next/dynamic";
//const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });
//import data from "../public/data/data2.js";
import { useRouter } from "next/router";
import items from "../public/data/calendario.json";

function Prueba(filtro) {
    //const [data,setData] = useState([]);
    var data = [];
    console.log("filtro de la función = "+filtro);
    var c = 0;
    for(var i=0; i<items.eventos.length; i++){
    if(filtro == "todos" || filtro == items.eventos[i].tipo || filtro == items.eventos[i].semestre){
        var diai = items.eventos[i].fechaInicio[0] + items.eventos[i].fechaInicio[1];
        var mesi = items.eventos[i].fechaInicio[3] + items.eventos[i].fechaInicio[4];
        var diaf = items.eventos[i].fechaTermino[0] + items.eventos[i].fechaTermino[1];
        var mesf = items.eventos[i].fechaTermino[3] + items.eventos[i].fechaTermino[4];
        var fecha;

        if(items.eventos[i].fechaInicio == "?"){
            fecha = items.eventos[i].fechaTermino;
        } else {
            if(items.eventos[i].fechaInicio != ""){
                fecha = "Desde el " + diai + "/" + mesi;
                if(items.eventos[i].fechaTermino != ""){
                    fecha += " hasta el " + diaf + "/" + mesf;
                }
            } else {
                fecha = "Hasta el " + diaf + "/" + mesf;
            }
        }
        /*setData(
            {
            title: items.eventos[i].titulo,
            cardTitle: fecha,
            cardDetailedText: items.eventos[i].descripcion,
            }
        );*/
        /*useEffect(() => setData(data.push(
            {
                title: items.eventos[i].titulo,
                cardTitle: fecha,
                cardDetailedText: items.eventos[i].descripcion,
            }
        )));*/
        data.push(
            {
                title: items.eventos[i].titulo,
                cardTitle: fecha,
                cardDetailedText: items.eventos[i].descripcion,
            }
        );
    } else {
        c++;
    }
    }
    console.log("Datos no agregados = " + c);
    return (data);
}

const Index = () => {

    const router = useRouter();
    console.log("filtro = " + router.query.filtro);
    let f = router.query.filtro;
    if(f == undefined){
        f = "todos";
    }
    let data = Prueba(f);
    
    const suPagina =(state2)=><>
        <div style={{ width: "900px", height: "700px" }}>
                    <Chrono 
                        items={state2} 
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

    const [state2, setState2] = useState(Prueba("todos"));
    const [state, setState]=useState(suPagina(state2));


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
                        <li><a href="/">Todo</a></li>

                        <li><a>Semestre </a>
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

                <button onClick={()=>{setState(
                    Prueba("otros")
                )}}>Cambiar estado</button>

                <button onClick={()=>{setState(
                    Prueba("todos")
                )}}>Volver</button>


                {/*<div style={{ width: "900px", height: "700px" }}>
                    <Chrono 
                        items={state2} 
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