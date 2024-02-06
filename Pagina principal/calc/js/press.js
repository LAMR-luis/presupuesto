document.getElementById("costForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

    // Obtiene los valores de los campos del formulario
    var select = document.getElementById("opciones");
    var opcionSeleccionada = select.value;
    var categoria = document.getElementById("categoria").value;
    var descripcion = document.getElementById("descripcion").value;
    var tipoRecurso = document.getElementById("tipoRecurso").value;
    var cantidad = document.getElementById("cantidad").value;
    var tipoUnidad = document.getElementById("tipoUnidad").value;
    var valorUnitario = document.getElementById("valorUnitario").value;
    var valorTotal = document.getElementById("valorTotal").value;

    // Crea una nueva fila en la tabla con los datos del formulario

    var table = document.getElementById("costTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    cell1.innerHTML = opcionSeleccionada;
    cell2.innerHTML = categoria;
    cell3.innerHTML = descripcion;
    cell4.innerHTML = tipoRecurso;
    cell5.innerHTML = cantidad;
    cell6.innerHTML = tipoUnidad;
    cell7.innerHTML = valorUnitario;
    cell8.innerHTML = valorTotal;

    // Limpia los campos del formulario
    document.getElementById("opciones").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("tipoRecurso").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("tipoUnidad").value = "";
    document.getElementById("valorUnitario").value = "";
    document.getElementById("valorTotal").value = "";
  });