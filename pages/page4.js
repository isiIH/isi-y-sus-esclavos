import React from "react";
import { Chrono } from "react-chrono";
import data from "../public/data/data.js";

export default function App() {
    return (
        <div className="App">
            <div style={{ width: "100%", height: "720px" }}>
                <Chrono
                    items={data} 
                    slideShow
                    enableOutline
                    theme={{
                        primary: "black",
                        secondary: "orange",
                        cardBgColor: "white",
                        cardForeColor: "black",
                        titleColor: "black"
                    }}
                    mode="VERTICAL_ALTERNATING" 
                />
            </div>
        </div>
    );
}
