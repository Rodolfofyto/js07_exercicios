function colorea(elemento, color) {
    elemento.style.backgroundColor = color;
}

// Como se llama //
function minimo(n1, n2) {  // Que recibe//
    if (n1 < n2) {     // Que hace//
        alert(n1);   // Que devuelve//
    } else {
        alert(n2);   // Que devuelve//
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
    const PI = 3.1416;
    let resultado = PI * radio * radio;

    document.getElementById('resultado').innerHTML = resultado.toFixed(2);
}