import {input, allowedKeys, main, root} from "./variables.js"

// Função que passa o valor do botão (dataset) para o input
function charKey(charKeyBtn) {
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
}

// Verificação das keys inseridas 
function keyDown(ev) {
  ev.preventDefault()

  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
}

// Função para mudar o thema da página
function themeSwitch(){

  if(main.dataset.theme === 'dark'){
    root.style.setProperty('--light-color', '#212529')
  }else {
    root.style.setProperty('--light-color', '#e9e9e9')
  }
}

// Função para limpar o imput
function clearInput(){
  input.value = ''
  focusInput()
}

// Função calcular o valor do input
function calculate() {
  const result = eval(input.value)
  input.value = result
  if (result === undefined) {
    input.value = 'ERROR'
  }
}

function focusInput(){
  input.focus()
}

export { charKey, keyDown, themeSwitch, clearInput, calculate, focusInput }