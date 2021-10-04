import items from "../data/calendario.json"

var data = [];

for(var i=0; i<items.eventos.length; i++){
    data.push(
        {
            title: items.eventos[i].fechaInicio,
            cardTitle: items.eventos[i].titulo,
            cardDetailedText: items.eventos[i].descripcion,
        }
    );
    if(items.eventos[i].fechaTermino != ""){
        if(data[i].title != ""){
            data[i].title += " | " + items.eventos[i].fechaTermino;
        } else {
            data[i].title += items.eventos[i].fechaTermino;
        }
    }
}

export default data;