const inserir = (valor) => {
    const numero = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = numero + valor;
}

const limpar = () => {
    document.getElementById('resultado').innerText = "";
}

const back = () => {
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerText = resultado.substring(0, resultado.length -1)
}

const calcular = () => {
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Digite algo!";
    }
}