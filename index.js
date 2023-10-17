function calcularFactorial(numeroUsuario) {
    if (isNaN(numeroUsuario) || numeroUsuario === "") {
        alert("Por favor, introduce un número válido.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numeroUsuario; i++) {
        factorial *= i;
    }

    const resultadoElemento = document.createElement('p');
    resultadoElemento.textContent = `El factorial de ${numeroUsuario} es: ${factorial}`;
    document.body.appendChild(resultadoElemento);
}

let entradaUsuario;
do {
    entradaUsuario = prompt("Por favor, introduce un número para calcular su factorial:");
} while (entradaUsuario === "" || isNaN(entradaUsuario));

calcularFactorial(parseInt(entradaUsuario));
