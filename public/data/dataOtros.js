import items from "../data/calendario.json"

var data = [];
var cont = -1;

for(var i=0; i<items.eventos.length; i++){
    if(items.eventos[i].tipo == "otros"){

        data.push(
            {
                title: items.eventos[i].fechaInicio,
                cardTitle: items.eventos[i].titulo,
                cardDetailedText: items.eventos[i].descripcion,

            }
        );
        cont = cont + 1;
        if(items.eventos[cont].fechaTermino != ""){
            if(data[cont].title != ""){
                data[cont].title += " | " + items.eventos[cont].fechaTermino;
            } else {
                data[cont].title += items.eventos[cont].fechaTermino;
            }
        }
    }
}

export default data;