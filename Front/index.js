$(document).ready(function() {
  mostrarProyectos();
  mostrarMiembros();
  mostrarTareas();
  $('.proyecto').on('click', function(event) {
      event.preventDefault();
      var nombre = $("#nombreP").val();
      var descripcion = $("#descripcionP").val();
      var fechaI = $("#fechaIP").val();
      var fechaF = $("#fechaFP").val();

      $.ajax({
          type: 'POST',
          url: 'http://localhost:3000/proyectos',
          data: JSON.stringify({
            "nombre": nombre,
            "descripcion": descripcion,
            "fechaInicio": fechaI,
            "fechaFin": fechaF
          }),
          contentType: 'application/json', // Set the Content-Type header to application/json
          success: function(response) {
            console.log(response);
            var fila = '<tr><td>' + nombre + '</td><td>' + descripcion + '</td><td>' + fechaI + '</td><td>' + fechaF + '</td></tr>';
            $('#tbodyP').append(fila);
          },
          error: function(xhr, status, error) {
            console.error(error);
          }
      });
  });

  $('.miembro').on('click', function(event) {
    event.preventDefault();
    var nombrePm = $("#nombrePm").val();
    var descripcionPm = $("#descripcionPm").val();
    var emailm = $("#emailm").val();
    var idpm = $("#idpm").val();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/miembros',
        data: JSON.stringify({
          "nombre": nombrePm,
          "apellido": descripcionPm,
          "correo": emailm,
          "proyecto": idpm
        }),
        contentType: 'application/json', // Set the Content-Type header to application/json
        success: function(response) {
          console.log(response);
          var fila = '<tr><td>' + nombrePm + '</td><td>' + descripcionPm + '</td><td>' + emailm + '</td><td>' + idpm + '</td></tr>';
          $('#tbodyM').append(fila);
        },
        error: function(xhr, status, error) {
          console.error(error);
        }
    });
  });

  $('.tarea').on('click', function(event) {
    event.preventDefault();
    var nombreT = $("#nombreT").val();
    var descripcionT = $("#descripcionT").val();
    var fechaIT = $("#fechaIT").val();
    var fechaFT = $("#fechaFT").val();
    var idpT = $("#idpT").val();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/tareas',
        data: JSON.stringify({
          "nombre": nombreT,
          "descripcion": descripcionT,
          "fechaInicio": fechaIT,
          "fechaFin": fechaFT,
          "proyecto": idpT
        }),
        contentType: 'application/json', // Set the Content-Type header to application/json
        success: function(response) {
          console.log(response);
          var fila = '<tr><td>' + nombreT + '</td><td>' + descripcionT + '</td><td>' + fechaIT + '</td><td>' + fechaFT + '</td><td>' + idpT + '</td></tr>';
          $('#tbodyT').append(fila);
        },
        error: function(xhr, status, error) {
          console.error(error);
        }
    });
});
});

function mostrarProyectos() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/proyectos',
        data: {},
        contentType: 'application/json', // Set the Content-Type header to application/json
        success: function(response) {
        //   console.log(response);
          response.forEach(data => {
            console.log(data.nombre);
              var fila = '<tr><td>' + data._id + '</td><td>' + data.nombre + '</td><td>' + data.descripcion + '</td><td>' + data.fechaInicio + '</td><td>' + data.fechaFin + '</td></tr>';
                $('#tbodyP').append(fila);
          });
        //   var fila = '<tr><td>' + nombre + '</td><td>' + descripcion + '</td><td>' + fechaI + '</td><td>' + fechaF + '</td></tr>';
        //   $('#tbodyP').append(fila);
        },
        error: function(xhr, status, error) {
          console.error(error);
        }
    });
}

function mostrarMiembros() {
  $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/miembros',
      data: {},
      contentType: 'application/json', // Set the Content-Type header to application/json
      success: function(response) {
        console.log(response);
        response.forEach(dataM => {
          
            var fila = '<tr><td>' + dataM.nombre + '</td><td>' + dataM.apellido + '</td><td>' + dataM.correo + '</td><td>' + dataM.proyecto + '</td></tr>';
              $('#tbodyM').append(fila);
        });
     
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
  });
}

function mostrarTareas() {

  $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/tareas',
      data: {},
      contentType: 'application/json', // Set the Content-Type header to application/json
      success: function(response) {
      //   console.log(response);
        response.forEach(data => {
          console.log(data.nombre);
            var fila = '<tr><td>' + data.nombre + '</td><td>' + data.descripcion + '</td><td>' + data.fechaInicio + '</td><td>' + data.fechaFin + '</td><td>' + data.proyecto + '</td></tr>';
              $('#tbodyT').append(fila);
        });
      //   var fila = '<tr><td>' + nombre + '</td><td>' + descripcion + '</td><td>' + fechaI + '</td><td>' + fechaF + '</td></tr>';
      //   $('#tbodyP').append(fila);
      },
      error: function(xhr, status, error) {
        console.error(error);
      }
  });
}