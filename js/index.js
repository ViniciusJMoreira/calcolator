import { charKey, keyDown, themeSwitch ,clearInput, calculate, focusInput } from "./function.js"
import { input } from "./variables.js"

// Seleciona todos os botões e com o metodo forEach pega os valores do dataset e passa para o input
document.querySelectorAll('.charKey').forEach(charKey)

// Evento do botão clear para limpar o input
document.getElementById('clear').addEventListener('click', clearInput)

// Evento de verificação das keys (teclado) inseridas
input.addEventListener('keydown', keyDown)

//Evento calcular adicionado no botão equal
document.getElementById('equal').addEventListener('click', calculate)

// Evento para mudar o thema da página
document.getElementById('themeSwitch').addEventListener('click', themeSwitch)

// Evento de foco no input quando carrega a página
window.addEventListener('load', focusInput)