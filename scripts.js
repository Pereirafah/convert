// Cotação de moedas do dia. 
const USD = 5.58, EUR = 6.51, GBP = 7.50, BRL = 1, CAD = 4.07, BTC = 657169.44;
const ARS = 0.0043, MXN = 0.30, CNY = 0.77, JPY = 0.0378, RUB = 0.065;
const INR = 0.067, AUD = 3.64, ZAR = 0.32, CHF = 6.98, SAR = 1.49;
const SEK = 0.56, NOK = 0.53, DKK = 0.87, KRW = 0.0041, TRY = 0.17, NGN = 0.0034;



// Obtendo os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
      case "BTC":
      convertCurrency(amount.value, BTC, "₿")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "BTC":
      convertCurrency(amount.value, BTC, "₿");
      break;
    case "ARS":
      convertCurrency(amount.value, ARS, "$");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    case "CNY":
      convertCurrency(amount.value, CNY, "¥");
      break;
    case "JPY":
      convertCurrency(amount.value, JPY, "¥");
      break;
    case "CAD":
      convertCurrency(amount.value, CAD, "C$");
      break;
    case "MXN":
      convertCurrency(amount.value, MXN, "$");
      break;
    case "RUB":
      convertCurrency(amount.value, RUB, "₽");
      break;
    case "INR":
      convertCurrency(amount.value, INR, "₹");
      break;
    case "AUD":
      convertCurrency(amount.value, AUD, "A$");
      break;
    case "ZAR":
      convertCurrency(amount.value, ZAR, "R");
      break;
    case "CHF":
      convertCurrency(amount.value, CHF, "CHF");
      break;
    case "SAR":
      convertCurrency(amount.value, SAR, "ر.س");
      break;
    case "SEK":
      convertCurrency(amount.value, SEK, "kr");
      break;
    case "NOK":
      convertCurrency(amount.value, NOK, "kr");
      break;
    case "DKK":
      convertCurrency(amount.value, DKK, "kr");
      break;
    case "KRW":
      convertCurrency(amount.value, KRW, "₩");
      break;
    case "TRY":
      convertCurrency(amount.value, TRY, "₺");
      break;
    case "NGN":
      convertCurrency(amount.value, NGN, "₦");
      break;
    default:
      document.getElementById('result').innerText = "Selecione uma moeda.";
      break;
}


}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // Calcoula o total.
    let total =amount * price

    // verifica se o resultado não é um número.
    if(isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para comverter.")
    }

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")

    // Exibe o resultado total.
    result.textContent = `${total} Reais`

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")

  } catch (error) {
    // Remove a classe do footer removendo ele.
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value){
  // Converte para númerro para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
