/*
//RADAR

const velmaxima = 70;
const pontoPorVel = 5;

function verificavel(vel)
{
    if (vel <= velmaxima)
    {
        console.log('Dentro do Limite. Parabéns!')
    }
    else
    {
        const pontos = (((vel - velmaxima) / 5))
        if (pontos < 12)
        {
            console.log('Excesso de Velocidade. Recebeu: ', pontos, ' ponto(s)')
        }
        else
        {
            console.log('Pontos: ', pontos)
            console.log("Você alcançou o limite de 12 pontos. Sua carteira está cassada.")
        }
    }
}
verificavel(70);


//PAR OU IMPAR
function verificanumero(num)
{
    for (i = 1; i <= num; i++)
    {
        if (i % 2 === 0)
            console.log(i, 'PAR')
            else
                console.log(i, 'IMPAR')
    }
}
verificanumero(10);

// RETORNA O TIPO DE DADO DAS PROPRIEDADES DE UM OBJETO
let pessoa =
{
    nome : 'Flávio',
    idade : 46,
    filhos : 2,
    cor : 'parda',
    calcado : 39
}
function retornaTipo(obj)
{
    for (prop in obj)
    {
        if (typeof obj[prop] === 'number')
        {
            console.log(prop, obj[prop])
        }
    }
}
retornaTipo(pessoa);


//FUNÇÃO PARA SOMAR OS MULTIPLOS DE 3 E DE 5
let somamult3 = 0;
let somamult5 = 0;
let somamult35 = 0;
let resultsoma = 0;

function somarMultiplos(num)
{
    for (i = 0; i <= num; i++)
    {
        if (i % 3 === 0)
        {
            somamult3 = somamult3 + i;
        }
        else if (i % 5 === 0)
        {
            somamult5 = somamult5 + i;
        }
    }
    console.log('Soma dos múltiplos de 3:', somamult3);
    console.log('Soma dos múltiplos de 5:', somamult5);
    resultsoma = somamult3 + somamult5;
    console.log('Soma dos múltiplos:', resultsoma);
}
somarMultiplos(10);


//MÉDIA DE NOTAS
const notas = [100, 100, 100, 70];
let media = 0;
let soma = 0;

function somaDasNotas (ns)
{
    for (nota of ns)
    {
        soma += nota;
    }
    return media = soma / notas.length;
    //console.log(media);
}

function classificaNotas()
{
    somaDasNotas(notas);
    if (media <= 59)
        console.log('E');
    else if (media <= 69)
        console.log('D');
    else if (media <= 79)
        console.log("C");
    else if (media <= 89)
        console.log("B");
    else 
        console.log('A');
}

classificaNotas();
console.log(media);

//EXIBIR ASTERÍSCOS

let asterisco = '';
function insereAsterisco(val)
{
    for (i = 0; i < val; i++)
    {
        asterisco += '*'; 
        console.log(asterisco);
    }
}
insereAsterisco(20);


//NÚMERO PRIMOS

let primos = [];

function mostraPrimos(val)
{
    for (i = 0; i < val; i++)
    {
        if (i % 2 === 0)
        {
            primos[i] = i;
        }
    }
    console.log(primos);
}
mostraPrimos(20);
*/

//Factory Functions
function criarCarros(modelo, ano, motor, cor, numPortas)
{
    return{
        modelo,
        ano,
        motor,
        cor,
        numPortas,
    }
}
const carro1 = criarCarros('z21', 2021, 1.8, 'azul', 4);
console.log(carro1);
