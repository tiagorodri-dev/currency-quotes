// mapeando constantes do html
const moedaBase = document.querySelector(".moeda-base").value;
const moedaSecundaria = document.querySelector(".moeda-secundaria").value;

const valorInput = document.querySelector(".valor");

const botaoConverter = document.querySelector(".converter");

const imgMoedaBase = document.querySelector(".img-moeda-base");
const textMoedaBase = document.querySelector(".text-moeda-base");
const valorMoedaBase = document.querySelector(".valor-moeda-base");
const variacao = document.querySelector(".variacao")

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

            valorConvertido = data.USDBRL.bid * valorInput;
            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(valorInput);
        }

        if(moedaFinal == 'EUR-BRL') {

            valorConvertido = data.EURBRL.bid * valorInput;

            valorMoedaBase.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR'
            }).format(valorInput);

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
            currency: 'BRL',
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

let timeRotation = 4000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

function proximaImagem() {

    images[currentImageIndex].classList.remove("selected")
    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected")
}

function iniciar() {
    setInterval(() => {
        // chamando função de troca de imagens
        proximaImagem()
    }, timeRotation)
}

// quando o documento for totalmente carregado, será chamado a função start
window.addEventListener("load", iniciar);

// fazendo requisição a API após o carregamento da página, para mostrar a variação da cotação no header da página
window.addEventListener('load', async () => {
    try {
        const moedas = ['EUR-USD', 'GBP-USD', 'EUR-GBP', 'USD-JPY', 'BRL-GBP', 'USD-CHF','AUD-USD', 'USD-CAD', 'EUR-CHF', 'BRL-USD', 'EUR-CAD', 'BRL-CNY'];

        for (const moeda of moedas) {
            const apiUrl = url.replace(":moedas", moedas);
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Erro ao buscar cotações. Código: ${response.status}`);
            }

            const data = await response.json();
            console.log("Cotações para", moedas, ":", data);

            // EUR/USD
            const varEURUSD = document.querySelector(".varEURUSD")
            if (data.EURUSD.varBid >= 0) {
                varEURUSD.style.color = 'green'
                varEURUSD.innerHTML = '+' + data.EURUSD.varBid + '%'
            }
            else {
                varEURUSD.style.color = 'red'
                varEURUSD.innerHTML = data.EURUSD.varBid + '%'
            }

            // GBP/USD
            const varGBPUSD = document.querySelector(".varGBPUSD")
            if(data.GBPUSD.varBid >= 0) {
                varGBPUSD.style.color = 'green'
                varGBPUSD.innerHTML = '+' + data.GBPUSD.varBid + '%'
            }
            else {
                varGBPUSD.style.color = 'red'
                varGBPUSD.innerHTML = data.GBPUSD.varBid + '%'
            }

            // EUR/GBP
            const varEURGBP = document.querySelector(".varEURGBP")
            if(data.EURGBP.varBid >= 0) {
                varEURGBP.style.color = 'green'
                varEURGBP.innerHTML = '+' + data.EURGBP.varBid + '%'
            }
            else {
                varEURGBP.style.color = 'red'
                varEURGBP.innerHTML = data.EURGBP.varBid + '%'
            }

            // USD/JPY
            const varUSDJPY = document.querySelector(".varUSDJPY")
            if(data.USDJPY.varBid >= 0) {
                varUSDJPY.style.color = 'green'
                varUSDJPY.innerHTML = '+' + data.USDJPY.varBid + '%'
            }
            else {
                varUSDJPY.style.color = 'red'
                varUSDJPY.innerHTML = data.USDJPY.varBid + '%'
            }

            // BRL/GBP
            const varBRLGBP = document.querySelector(".varBRLGBP")
            if(data.BRLGBP.varBid >= 0) {
                varBRLGBP.style.color = 'green'
                varBRLGBP.innerHTML = '+' + data.BRLGBP.varBid + '%'
            }
            else {
                varBRLGBP.style.color = 'red'
                varBRLGBP.innerHTML = data.BRLGBP.varBid + '%'
            }

            // USD/CHF
            const varUSDCHF = document.querySelector(".varUSDCHF")
            if(data.USDCHF.varBid >= 0) {
                varUSDCHF.style.color = 'green'
                varUSDCHF.innerHTML = '+' + data.USDCHF.varBid + '%'
            }
            else {
                varUSDCHF.style.color = 'red'
                varUSDCHF.innerHTML = data.USDCHF.varBid + '%'
            }

            // AUD/USD
            const varAUDUSD = document.querySelector(".varAUDUSD")
            if(data.AUDUSD.varBid >= 0) {
                varAUDUSD.style.color = 'green'
                varAUDUSD.innerHTML = '+' + data.AUDUSD.varBid + '%'
            }
            else {
                varAUDUSD.style.color = 'red'
                varAUDUSD.innerHTML = data.AUDUSD.varBid + '%'
            }

            // USD/CAD
            const varUSDCAD = document.querySelector(".varUSDCAD")
            if(data.USDCAD.varBid >= 0) {
                varUSDCAD.style.color = 'green'
                varUSDCAD.innerHTML = '+' + data.USDCAD.varBid + '%'
            }
            else {
                varUSDCAD.style.color = 'red'
                varUSDCAD.innerHTML = data.USDCAD.varBid + '%'
            }

            // EUR/CHF
            const varEURCHF = document.querySelector(".varEURCHF")
            if(data.EURCHF.varBid >= 0) {
                varEURCHF.style.color = 'green'
                varEURCHF.innerHTML = '+' + data.EURCHF.varBid + '%'
            }
            else {
                varEURCHF.style.color = 'red'
                varEURCHF.innerHTML = data.EURCHF.varBid + '%'
            }

            // BRL/USD
            const varBRLUSD = document.querySelector(".varBRLUSD")
            if(data.BRLUSD.varBid >= 0) {
                varBRLUSD.style.color = 'green'
                varBRLUSD.innerHTML = '+' + data.BRLUSD.varBid + '%'
            }
            else {
                varBRLUSD.style.color = 'red'
                varBRLUSD.innerHTML = data.BRLUSD.varBid + '%'
            }

            // EUR/CAD
            const varEURCAD = document.querySelector(".varEURCAD")
            if(data.EURCAD.varBid >= 0) {
                varEURCAD.style.color = 'green'
                varEURCAD.innerHTML = '+' + data.EURCAD.varBid + '%'
            }
            else {
                varEURCAD.style.color = 'red'
                varEURCAD.innerHTML = data.EURCAD.varBid + '%'
            }

            // GBP/JPY
            // const varJPYGBP = document.querySelector(".varJPYGBP")
            // if(data.JPYGBP.varBid >= 0) {
            //     varJPYGBP.style.color = 'green'
            //     varJPYGBP.innerHTML = '+' + data.JPYGBP.varBid + '%'
            // }
            // else {
            //     varJPYGBP.style.color = 'red'
            //     varJPYGBP.innerHTML = data.JPYGBP.varBid + '%'
            // }

            // BRL/CNY
            const varBRLCNY = document.querySelector(".varBRLCNY")
            if(data.BRLCNY.varBid >= 0) {
                varBRLCNY.style.color = 'green'
                varBRLCNY.innerHTML = '+' + data.BRLCNY.varBid + '%'
            }
            else {
                varBRLCNY.style.color = 'red'
                varBRLCNY.innerHTML = data.BRLCNY.varBid + '%'
            }

            const atualizacao = document.querySelector(".atualizacao");
            atualizacao.innerHTML = '<b>Última atualização às </b>' + new Date(data.EURUSD.create_date).toLocaleTimeString('pt-BR') + ' do dia ' + new Date(data.EURUSD.create_date).toLocaleDateString('pt-BR');

        }
    } catch (error) {
        console.log("Erro ao buscar cotações: ", error);
    }
});

// atualização da aplicação
const buttonAtualizar = document.querySelector(".button-atualizar");
buttonAtualizar.addEventListener('click', () => {
    Swal.fire({
        icon: 'warning',
        title: 'Deseja atualizar a aplicação?',
        text: 'A atualização recarregará a página e todo conteúdo será perdido.',
        confirmButtonText: 'Sim',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        showCloseButton: true,
        cancelButtonColor: '#d33',
    }).then((result) => {
        if(result.isConfirmed) {
            window.location.reload();
        }
    })
})


const buttonLimpar = document.querySelector(".button-limpar");
buttonLimpar.addEventListener('click', () => {
    if (valorInput.value != "") {
        valorInput.value = ""
    }
    else {
        Swal.fire({
            icon: 'info',
            title: "O campo está vazio!",
            showCloseButton: true,
            timer: 1500
        });
    }
})
