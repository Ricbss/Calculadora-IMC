const button = document.getElementById('button'); 
// Obtém o elemento HTML com o id "button" e armazena na variável "button"

const nome = document.getElementById('nome'); 
// Obtém o elemento HTML com o id "nome" e armazena na variável "nome"

const peso = document.getElementById('peso'); 
// Obtém o elemento HTML com o id "peso" e armazena na variável "peso"

const altura = document.getElementById('altura'); 
// Obtém o elemento HTML com o id "altura" e armazena na variável "altura"

const resultado = document.getElementById('resultado'); 
// Obtém o elemento HTML com o id "resultado" e armazena na variável "resultado"

const getText = (imc) => {
    // Define uma função chamada "getText" que recebe o IMC como parâmetro e retorna um texto apropriado
    if(imc > 40) return 'Obesidade grau III'; // Se o IMC for maior que 40, retorna "Obesidade grau III"
    if(imc > 35) return 'Obesidade grau II';  // Se o IMC for maior que 35, retorna "Obesidade grau II"
    if(imc > 30) return 'Obesidade grau I';   // Se o IMC for maior que 30, retorna "Obesidade grau I"
    if(imc > 25) return 'Levemente acima do peso'; // Se o IMC for maior que 25, retorna "Levemente acima do peso"
    if(imc > 18.5) return 'peso ideal';       // Se o IMC for maior que 18.5, retorna "peso ideal"
    return 'Abaixo do peso';                  // Caso contrário, retorna "Abaixo do peso"
}

const imcCalc = () => {
    // Define uma função chamada "imcCalc" que calcula o IMC e exibe o resultado
    if(!peso.value || !altura.value || !nome.value) 
        // Verifica se algum dos campos "peso", "altura" ou "nome" está vazio
        return resultado.textContent = 'Preencha todos os campos'; 
        // Se algum campo estiver vazio, define o texto do elemento "resultado" como "Preencha todos os campos"
    
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1); 
    // Calcula o IMC dividindo o peso pela altura ao quadrado, ambos convertidos para números. 
    // O resultado é arredondado para uma casa decimal usando "toFixed(1)"

    resultado.textContent = `${nome.value} - ${getText(valorImc)}`; 
    // Define o texto do elemento "resultado" com o nome da pessoa e a descrição correspondente ao IMC
}

button.addEventListener('click', imcCalc); 
// Adiciona um evento de clique ao botão, que chama a função "imcCalc" quando o botão é clicado







