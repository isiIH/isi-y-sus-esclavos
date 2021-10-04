import React from "react";
import { Chrono } from "react-chrono";
import data from "../public/data/data.js";
import items from "../public/data/calendario.json"

export default function App() {
    return (
        <div className="App">
            <h1>Calendario Académico de Pregrado Uach.</h1>
            <div style={{ width: "100%", height: "720px" }}>
                <Chrono
                    items={data}
                    disableNavOnKey
                    slideShow
                    enableOutline
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
        </div>
    );
}
