import items from "../data/calendario.json"

var data = [];

for (var i = 0; i < items.eventos.length; i++) {
    var diai = items.eventos[i].fechaInicio[0] + items.eventos[i].fechaInicio[1];
    var mesi = items.eventos[i].fechaInicio[3] + items.eventos[i].fechaInicio[4];
    var diaf = items.eventos[i].fechaTermino[0] + items.eventos[i].fechaTermino[1];
    var mesf = items.eventos[i].fechaTermino[3] + items.eventos[i].fechaTermino[4];
    var fecha;

    if (items.eventos[i].fechaInicio == "?") {
        fecha = items.eventos[i].fechaTermino;
    } else {
        if (items.eventos[i].fechaInicio != "") {
            fecha = "Desde el " + diai + "/" + mesi;
            if (items.eventos[i].fechaTermino != "") {
                fecha += " hasta el " + diaf + "/" + mesf;
            }
        } else {
            fecha = "Hasta el " + diaf + "/" + mesf;
        }
    }

    if (items.eventos[i].tipo == "beneficios") {
        data.push(
            {
                title: items.eventos[i].titulo,
                cardTitle: fecha,
                cardDetailedText: items.eventos[i].descripcion,
            }
        );
    }

}

export default data;