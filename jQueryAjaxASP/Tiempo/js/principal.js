var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqamxhZ3VuYW1vcmVub0BnbWFpbC5jb20iLCJqdGkiOiIwNzU0NGUzMy0wMDgwLTQwNzctOWE0Zi1mNWE4NDZiY2Y4NmMiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY3NTA2NDIwOSwidXNlcklkIjoiMDc1NDRlMzMtMDA4MC00MDc3LTlhNGYtZjVhODQ2YmNmODZjIiwicm9sZSI6IiJ9.Oy-NGzJPsoLc85shjnHU6UmM9x21C5EJniSPNiB4H_s",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
  consultaBase(response.datos);
});

function consultaBase(respuesta) {
  $.get(respuesta, {}, verDatos);
}

function verDatos(data, status) {
  let datos = JSON.parse(data);

  let dia = []
  let tMax = []
  let tMin = []

  const opciones = { weekday: 'short', day: 'numeric' }

  for (var i = 0; i < 7; i++) {
    $('#fechaDia').append('<td>' + new Date(datos[0].prediccion.dia[i].fecha).toLocaleDateString('es-ES', opciones) + '</td>')
    $('#estadoCielo').append('<td><img src="https://www.aemet.es/imagenes/png/estado_cielo/' + datos[0].prediccion.dia[i].estadoCielo[0].value + '_g.png" ></td>')
    $('#tempMax').append('<td><span class="rojo">' + datos[0].prediccion.dia[i].temperatura.maxima + '</span>/<span class="azul">' + datos[0].prediccion.dia[i].temperatura.minima + '</span></td>')
    dia.push(new Date(datos[0].prediccion.dia[i].fecha).toLocaleDateString('es-ES', opciones));
    tMax.push(datos[0].prediccion.dia[i].temperatura.maxima);
    tMin.push(datos[0].prediccion.dia[i].temperatura.minima);
  }

  new Chart("myChart", {
    type: "line",//bar para barras
    data: {
      labels: dia,
      datasets: [{
        label: 'Maxima',
        data: tMax,
        borderColor: "red",
        fill: false
      }, {
        label: 'Minima',
        data: tMin,
        borderColor: "blue",
        fill: false
      }]
    },
    options: {
      legend: { display: true }
    }
  });
}