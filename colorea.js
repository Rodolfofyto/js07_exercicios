function colorea(elemento, color) {
    elemento.style.backgroundColor = color;
}

// Como se llama //
function minimo(n1, n2) {  // Que recibe//
    if (n1 < n2) {     // Que hace//
        return (n1);   // Que devuelve//
    } else if (n2 < n1) {
        return (n2);   // Que devuelve//
    } else {
        return ('Los número son iguales...') // Que devuelve//
    }
}

function areaTriangulo(base, altura) {
    let resultado = base * altura / 2;
    
    document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}

function areaRectangulo(base, altura) {
    let resultado = base * altura;

    document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}

function areaCirculo(radio) {
    let resultado = Math.PI * radio * radio;

    document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}