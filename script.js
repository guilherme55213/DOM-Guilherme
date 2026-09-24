
const caixas = document.querySelectorAll('div');


caixas.forEach((caixa, index) => {
    caixa.id = 'caixa' + (index + 1);
});


const botoes = document.querySelectorAll('button');
const botaoPrincipal = botoes[0];
const botaoSecundario = botoes[1];


caixas.forEach(caixa => {
    caixa.addEventListener('click', function () {
        this.style.border = '1px solid green';
    });
});


botaoSecundario.addEventListener('click', function () {
    caixas.forEach(caixa => {
        caixa.style.border = 'none';
    });
});


botaoPrincipal.addEventListener('click', function () {
    caixas.forEach(caixa => {
        caixa.style.border = '1px solid blue';
    });
});