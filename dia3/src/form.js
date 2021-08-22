import './main.js'

const app = document.querySelector('[data-js="app"]')
const inputName = document.querySelector('[data-js="name"]')
const form = document.querySelector('[data-js="form"')
const nameDiv = document.querySelector('[data-js="name-div"]')

const select = document.createElement('select')
const containerColor = document.createElement('div')

containerColor.style.display = 'flex'
app.appendChild(containerColor)
const colors = ['blue', 'green', 'red', 'yellow','purple']

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// ternario ? true : false
//  quando copio uma string e colo no input ele não manipula
// comportamento inesperado de capitalize todas as letras

inputName.addEventListener('input', (e)=>{
  const arr = ['de','da', 'do','dos', 'das']
  // const  letter = e.target.value.split(' ')
  const name = e.target.value.split(' ')
  .map((e)=>{ return arr.includes(e)? e:capitalize(e)})
  .join(" ")

  nameDiv.innerHTML = name
  console.log(name)
})

select.setAttribute('multiple','multiple')
select.setAttribute('data-js', 'color-select')
form.appendChild(select)


colors.map((color)=>{
  const option = document.createElement('option')
  option.setAttribute('value', color)
  option.textContent = color
  select.append(option)
})



const divColors = (color) => {

  const divColor=  document.createElement('div')
  divColor.setAttribute('value', color.value )

  divColor.classList.add('color-div')
  divColor.style.width = '100px'
  divColor.style.height = '100px'
  divColor.style.background = color.value
  containerColor.appendChild(divColor)
}

const colorSelect = document.querySelector('[data-js="color-select"]')



colorSelect.addEventListener('change', (e)=>{
  containerColor.innerHTML = ''
  const colors = [...e.target.selectedOptions].map(el=>{
    divColors(el)
  }
)})
