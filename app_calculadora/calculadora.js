
function somar(a,b){
    return a + b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}

const express = require('express');
const calc = require('./calculadora');
const app = express();

app get('/', (req, res)=>{
    res.send('Hello, world!');
});

const PORT = 8080;
app.listen(PORT, ()=>){
    console.log('app rodando na porta' + PORT);
}



