import items from "../data/calendario.json"

/*const data = [],

for(const i=0; i<items.eventos.length; i++){
    data.push({
        
    });
}*/

const data = [
    {
        title: items.eventos[0].fechaInicio + " | " + items.eventos[0].fechaTermino,
        cardTitle: items.eventos[0].titulo,
        cardDetailedText: items.eventos[0].descripcion,
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
        cardDetailedText: "uwu",
        media: {
            type: "IMAGE",
            source: {
                url: "../../images/gato.png"
            }
        }
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
        cardDetailedText: "uwu",
        media: {
            type: "IMAGE",
            source: {
                url: "../../images/gato.png"
            }
        }
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
        cardDetailedText: "uwu",
        media: {
            type: "IMAGE",
            source: {
                url: "../../images/gato.png"
            }
        }
    }
];

export default data;