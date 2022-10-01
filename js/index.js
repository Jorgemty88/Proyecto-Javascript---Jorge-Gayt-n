function verArreglos() {
    let arreglos = "Arreglos disponibles: \n" +
                    "1.- Arreglo 1 \n" +
                    "2.- Arreglo 2 \n" +
                    "3.- Arreglo 3"

    let respuesta = prompt("Ingresa el # de Arreglo para ver el precio: \n" + arreglos)
    switch (parseInt(respuesta)) {
        case 1:
            alert("Arreglo elegido 'Arreglo 1'. El precio es de $420.00 MXN")
            break;
        case 2:
            alert("Arreglo elegido 'Arreglo 2'. El precio es de $560.00 MXN")
            break;
        case 3:
            alert("Arreglo elegido 'Arreglo 3'. El precio es de $650.00 MXN")
            break;
        default:
            alert("No se reconoce el # de Arreglo.")
    }
    let continuar = confirm("¿Desea consultar el precio de otro arreglo?")
    if (continuar) {
        verArreglos()
    }
}

