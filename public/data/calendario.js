import items from "./calendario.json";
import {Chrono} from "react-chrono";

export function Calendario(f) {
    return(
        <div style={{ width: "900px", height: "700px" }}>
            <Chrono 
                items={Prueba(f)} 
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
    );
}

export function Prueba(filtro) {
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
    console.log("-----------------------");
    return (data);
}