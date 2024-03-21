// mapeando constantes do html
const moedaBase = document.querySelector(".moeda-base").value;
const moedaSecundaria = document.querySelector(".moeda-secundaria").value;

const valorInput = document.querySelector(".valor");

const botaoConverter = document.querySelector(".converter");

const imgMoedaBase = document.querySelector(".img-moeda-base");
const textMoedaBase = document.querySelector(".text-moeda-base");
const valorMoedaBase = document.querySelector(".valor-moeda-base");

const imgMoedaSecundaria = document.querySelector(".img-moeda-secundaria")
const textMoedaSecundaria = document.querySelector(".text-moeda-secundaria");
const valorMoedaSecundaria = document.querySelector(".valor-moeda-secundaria");

// criando constantes para receber dados da API de Moeda
const url = 'https://economia.awesomeapi.com.br/json/last/:moedas';

async function pegarCotacoes(moedaFinal, valorInput) {
    try {
        const apiUrl = url.replace(":moedas", moedaFinal);
        const response = await fetch(apiUrl);

        if(!response.ok) {
            throw new Error(`Erro ao buscar cotações. Código: ${response.status}`);
        }

        const data = await response.json();
        console.log("Cotações: ", data);

        // cálculo de cotação
        let valorConvertido = 0;
        if (moedaFinal == 'USD-BRL') {
            const percentualMoeda = document.querySelector(".percentual-moeda");

            valorConvertido = data.USDBRL.bid * valorInput;
            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(valorInput);

            percentualMoeda.innerHTML = data.USDBRL.varBid
        }

        if(moedaFinal == 'EUR-BRL') {
            const percentualMoeda = document.querySelector(".percentual-moeda");

            valorConvertido = data.EURBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            }).format(valorInput);

            percentualMoeda.innerHTML = data.EURBRL.varBid
        }

        if(moedaFinal == 'JPY-BRL') {
            valorConvertido = data.JPYBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
            }).format(valorInput);
        }

        if(moedaFinal == 'GBP-BRL') {
            valorConvertido = data.GBPBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'GBP'
            }).format(valorInput);
        }

        if(moedaFinal == 'CHF-BRL') {
            valorConvertido = data.CHFBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('de-CH', {
                style: 'currency',
                currency: 'CHF'
            }).format(valorInput);
        }

        if(moedaFinal == 'CAD-BRL') {
            valorConvertido = data.CADBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-AU', {
                style: 'currency',
                currency: 'CAD'
            }).format(valorInput);
        }

        if(moedaFinal == 'AUD-BRL') {
            valorConvertido = data.AUDBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-AU', {
                style: 'currency',
                currency: 'AUD'
            }).format(valorInput);
        }

        if(moedaFinal == 'CNY-BRL') {
            valorConvertido = data.CNYBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-AU', {
                style: 'currency',
                currency: 'CNY'
            }).format(valorInput);
        }

        if(moedaFinal == 'ARS-BRL') {
            valorConvertido = data.ARSBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-AU', {
                style: 'currency',
                currency: 'ARS'
            }).format(valorInput);
        }

        valorMoedaSecundaria.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorConvertido.toFixed(2)) // Arredonda para 2 casas decimais
    }

    catch (error) {
        console.log("Erro ao buscar cotações: ", error);
    }
}

valorInput.addEventListener("input", function() {

    // validação de caracteres no input
    let valorDigitado = valorInput.value;

    // Remove todos os caracteres que não são números ou ponto decimal
    valorDigitado = valorDigitado.replace(/[^0-9.]/g, '');

    // Verifica se já existe mais de um ponto decimal
    if (valorDigitado.split('.').length > 2) {
        valorDigitado = valorDigitado.slice(0, -1); // Remove o último caractere
    }

    // Atualiza o valor do campo de entrada com o valor formatado
    valorInput.value = valorDigitado;

    const moedaFinal = selectMoedaBase.value + '-' + 'BRL';
    valorMoedaBase.innerText = valorInput.value;
    pegarCotacoes(moedaFinal, valorInput.value);
});

const selectMoedaBase = document.querySelector(".moeda-base")
selectMoedaBase.addEventListener("change", moedaBaseAlterada);

function moedaBaseAlterada() {
    const moedaFinal = selectMoedaBase.value + '-' + 'BRL';

    valorMoedaBase.innerText = valorInput.value
    pegarCotacoes(moedaFinal, valorInput.value);

    if (selectMoedaBase.value == 'USD') {
        imgMoedaBase.src = './assets/dolar-americano.png';
        textMoedaBase.innerHTML = 'Dólar Americano';
    }

    if (selectMoedaBase.value == 'EUR') {
        imgMoedaBase.src = './assets/euro.png';
        textMoedaBase.innerHTML = 'Euro';
    }

    if (selectMoedaBase.value == 'JPY') {
        imgMoedaBase.src = './assets/iene-japones.png';
        textMoedaBase.innerHTML = 'Iene Japonês';
    }

    if (selectMoedaBase.value == 'GBP') {
        imgMoedaBase.src = './assets/libra-esterlina.png';
        textMoedaBase.innerHTML = 'Libra Esterlina';
    }

    if (selectMoedaBase.value == 'CHF') {
        imgMoedaBase.src = './assets/franco-suico.png';
        textMoedaBase.innerHTML = 'Franco Suiço';
    }

    if (selectMoedaBase.value == 'CAD') {
        imgMoedaBase.src = './assets/dolar-canadense.png';
        textMoedaBase.innerHTML = 'Dólar Canadense';
    }

    if (selectMoedaBase.value == 'AUD') {
        imgMoedaBase.src = './assets/dolar-australiano.png';
        textMoedaBase.innerHTML = 'Dólar Australiano';
    }

    if (selectMoedaBase.value == 'CNY') {
        imgMoedaBase.src = './assets/yuan-chines.png';
        textMoedaBase.innerHTML = 'Yuan Chinês';
    }

    if (selectMoedaBase.value == 'ARS') {
        imgMoedaBase.src = './assets/peso-argentino.png';
        textMoedaBase.innerHTML = 'Peso Argentino';
    }
}

window.onload = function() {
    // const moeda
    // while(moeda >= 0) {

    // }
    const moedaFinalPadrao = 'USD-BRL'; // Defina a moeda final padrão
    pegarCotacoes(moedaFinalPadrao, 1); // Chama a função com valor padrão (1, por exemplo)
};

// EUR/USD
// GBP/USD
// USD/JPY
// USD/CHF
// AUD/USD
// USD/CAD
// CAD/CHF
// USD/BRL
// AUD/CAD