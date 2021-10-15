import items from "../data/calendario.json"

var data = [];

for (var i = 0; i < items.eventos.length; i++) {
    var dia_inicio = items.eventos[i].fechaInicio[0] + items.eventos[i].fechaInicio[1];
    var mes_inicio = items.eventos[i].fechaInicio[3] + items.eventos[i].fechaInicio[4];
    var dia_fin = items.eventos[i].fechaTermino[0] + items.eventos[i].fechaInicio[1];
    var mes_fin = items.eventos[i].fechaTermino[3] + items.eventos[i].fechaInicio[4];


    if (items.eventos[i].fechaTermino == "") {
        dia_fin = parseInt(dia_inicio) + 1;
        mes_fin = mes_inicio;
    }


    var color = "";
    if (items.eventos[i].tipo == "academico") {
        color = "green";

        data.push(
            {
                id: i,
                name: items.eventos[i].titulo,
                start: new Date(2021, mes_inicio - 1, dia_inicio),
                end: new Date(2021, mes_fin - 1, dia_fin),
                color: color
            }
        );
    }


}

export default data;