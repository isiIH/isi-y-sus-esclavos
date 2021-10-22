import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Chrono } from "react-chrono";
import data from "../public/data/dataOtros.js";

const Index = () => {
    return (
    <div className="container">
    <Head>
        <title>Calendario Académico</title>
        <link rel="icon" href="/favicon.ico" />
        
        <script src="https://kit.fontawesome.com/c1eae85dfa.js" crossorigin="anonymous"></script>
        <script src="app.js" defer></script>
    </Head>

    <main>



        <h1 className="title">Calendario Académico UACH 2021</h1>

        
        <nav class="menu">
            <label class="logo">Calendario UACh</label>
            <ul class="menu-items">
                <li><Link href={{
                pathname: "/",
                query: { opt: 0 },
                }}><a>Inicio</a></Link></li>
                <li><Link href={{
                pathname: "/beneficios",
                query: { opt: 0 },
                }}><a href="#">Beneficios</a></Link></li>
                <li><Link href={{
                pathname: "/academico",
                query: { opt: 0 },
                }}><a href="#">Academico</a></Link></li>
                <li><Link href={{
                pathname: "/funcionarios",
                query: { opt: 0 },
                }}><a href="#">Funcionarios</a></Link></li>
                <li><Link href={{
                pathname: "/cultural",
                query: { opt: 0 },
                }}><a href="#"> Cultural</a></Link></li>
                <li><Link href={{
                pathname: "/otros",
                query: { opt: 0 },
                }}><a href="#">Otros</a></Link></li>
            </ul>
            <span class="btn-menu">
                <i class="fa fa-bars"></i>
            </span>
        
        
        </nav>
        
         
        
            <div className="uwu" style={{ width: "100%", height: "39.375rem" }}>
                <Chrono
                    items={data}
                    disableNavOnKey
                    slideShow
                    //enableOutline
                    cardHeight={100}
                    cardWidth={500}
                    useReadMore={false}
                    borderLessCards
                    theme={{
                        primary: "black",
                        secondary: "orange",
                        cardBgColor: "LightGray",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}
                    mode="VERTICAL_ALTERNATING" 
                />
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

export default Index;
