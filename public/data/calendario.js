import items from "./calendario.json";
import {Chrono} from "react-chrono";
import dynamic from "next/dynamic";
const TimeLine = dynamic(() => import("react-gantt-timeline"), { ssr: false });

export function CalendV(f) {
    return(
        <>
        <div className="time-line-container" style={{height: "700px",width:"700px"}}>
            <Chrono 
                items={dataV(f)} 
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
        </>
    );
}

export function dataV(filtro) {
  var data = [];

  for(var i=0; i<items.eventos.length; i++){
    if(filtro == "todos" || filtro == items.eventos[i].tipo || filtro == items.eventos[i].semestre){      
      var fecha;

      if(items.eventos[i].fechaInicio == "?"){
        fecha = items.eventos[i].fechaTermino;
      } else {
        if(items.eventos[i].fechaInicio != ""){
          fecha = "Desde el " + items.eventos[i].fechaInicio.substring(0,10);
          if(items.eventos[i].fechaTermino != ""){
            fecha += " hasta el " + items.eventos[i].fechaTermino.substring(0,10);
          }
        } else {
          fecha = "Hasta el " + items.eventos[i].fechaTermino.substring(0,10);
        }
      }

      data.push(
        {
          title: items.eventos[i].titulo,
          cardTitle: fecha,
          cardDetailedText: items.eventos[i].descripcion,
        }
      );
    }
  }

  return (data);
}

export function CalendH(data,tiempo) {
  const config = {
    header: {
      month: {
        style: {
          backgroundColor: "#8FBBAF",
          color: "white",
          fontSize: 20
        }
      },
      dayOfWeek: {
        style: {
          backgroundColor: "#55726b",
          fontSize: 9
        }
      },
      dayTime: {
        style: {
          background: "#cbcbcb",
          fontSize: 9,
          color: "black"
        },
        selectedStyle: {
          backgroundColor: "#5cbbfb",
          fontWeight: "bold",
          color: "white"
        }
      }
    },
    taskList: {
      title: {
        label: "Eventos",
        style: {
          backgroundColor: "#8FBBAF",
          color: "White"
        }
      },
      task: {
        style: {
          backgroundColor: "white",
          color: "black"
        }
      },
      verticalSeparator: {
        style: {
          backgroundColor: "#8FBBAF"
        },
        grip: {
          style: {
            backgroundColor: "#5b7bb2"
          }
        }
      }
    },
    dataViewPort: {
      rows: {
        style: {
          backgroundColor: "white",
          borderBottom: "solid 0.1px lightgrey"
        }
      },
      task: {
        showLabel: false,
        style: {
        }
      }
    }
  };
  return(
    <>
      <p id="text-calend">Desplácese a la izquierda si no visualiza los eventos</p>
      <div className="time-line-container">
          <TimeLine data={data} config={config} mode={tiempo} nonEditableName={true}/>
      </div>
      
      <ul className="legend">
        <li><span className="beneficios" style={{ backgroundColor:items.leyenda[0].color }}></span>Beneficios</li>
        <li><span className="academicos" style={{ backgroundColor:items.leyenda[1].color }}></span>Académico</li>
        <li><span className="funcionarios" style={{ backgroundColor:items.leyenda[2].color }}></span>Funcionarios</li>
        <li><span className="cultural" style={{ backgroundColor:items.leyenda[3].color }}></span>Cultural</li>
        <li><span className="otros" style={{ backgroundColor:items.leyenda[4].color }}></span>Otros</li>
      </ul>
    </>
  );
}

export function dataH(filtro,bool) {
    var data = [];
    var hoy = new Date();
    var dia = hoy.getDate();
    var mes = hoy.getMonth()+1;
    var año = hoy.getFullYear();

    for (var i = 0; i < items.eventos.length; i++) {
        if(filtro == "todos" || filtro == items.eventos[i].tipo || filtro == items.eventos[i].semestre){
            if(items.eventos[i].fechaInicio != "?"){
                var dia_inicio = items.eventos[i].fechaInicio[0] + items.eventos[i].fechaInicio[1];
                var mes_inicio = items.eventos[i].fechaInicio[3] + items.eventos[i].fechaInicio[4];
                var dia_fin = items.eventos[i].fechaTermino[0] + items.eventos[i].fechaTermino[1];
                var mes_fin = items.eventos[i].fechaTermino[3] + items.eventos[i].fechaTermino[4];
                var año_inicio = items.eventos[i].fechaInicio.substring(6,10);
                var año_fin = items.eventos[i].fechaTermino.substring(6,10);
            }
            
            if (items.eventos[i].fechaTermino == "" || items.eventos[i].fechaInicio == "?") {
                dia_fin = (parseInt(dia_inicio) + 1).toString();
                mes_fin = mes_inicio;
                año_fin = año_inicio;
            } else if (items.eventos[i].fechaInicio == "") {
                dia_inicio = (parseInt(dia_fin) - 1).toString();
                mes_inicio = mes_fin;
                año_inicio = año_fin;
            }
            
            var j = 0;
            while(items.eventos[i].tipo != items.leyenda[j].tipo){
                j++;
            }

            var mostrar;
            if(parseInt(año_fin) > año)
              mostrar = true;
            else 
              if(parseInt(año_fin) == año && parseInt(mes_fin) > mes)
                mostrar = true;
              else 
                if(parseInt(año_fin) == año && parseInt(mes_fin) == mes && parseInt(dia_fin) >= dia)
                  mostrar = true;
                else
                  mostrar = false;

            if(bool || mostrar){
              data.push(
                  {
                    id: i,
                    name: items.eventos[i].titulo,
                    description: items.eventos[i].descripcion,
                    start: new Date(año_inicio, mes_inicio - 1, dia_inicio),
                    end: new Date(año_fin, mes_fin - 1, dia_fin),
                    color: items.leyenda[j].color
                  }
              );
            }
        }
    }
    
    return (data);
}