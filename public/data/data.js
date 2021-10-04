import items from "../data/calendario.json"

var data = [];

for(var i=0; i<items.eventos.length; i++){
    data.push(
        {
            title: items.eventos[i].fechaInicio + " | " + items.eventos[i].fechaTermino,
            cardTitle: items.eventos[i].titulo,
            cardDetailedText: items.eventos[i].descripcion,
        }
    );
}

console.log(items.eventos.length);

export default data;