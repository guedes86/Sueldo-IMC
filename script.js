function oscuro(){
    document.body.classList.toggle('dark-mode');

}

function calcularimc(){
    let altura = parseFloat(document.getElementById('num1imc').value);
    let peso = parseFloat(document.getElementById('num2imc').value);

    res = peso/(altura*altura);
    resultado = res.toFixed(2);

    document.getElementById('resultadoimc').textContent = "Tu IMC es: "+resultado+" %";
    document.getElementById('tabla').style.visibility = 'visible'; 

}

function calcularsueldo(){
    let horas = parseFloat(document.getElementById('num1sueldo').value);
    let unidade = parseFloat(document.getElementById('num2sueldo').value);

    resultado = horas*unidade;

    document.getElementById('resultadosueldo').textContent ="Tu sueldo total es: "+resultado+ " Pesos Colombiano";

}

function apagar(){

    location.reload();
}



