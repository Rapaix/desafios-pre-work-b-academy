import './main.js'

const inputName = document.querySelector('[data-js="name"]')
const nameDiv = document.querySelector('[data-js="name-div"]')
// const capitalize = (string) => {string}
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// ternario ? true : false
//  quando copio uma string e colo no input ele não manipula

inputName.addEventListener('input', (e)=>{
  const arr = ['de','da', 'do','dos', 'das']
  // const  letter = e.target.value.split(' ')
  const name = e.target.value.split(' ')
              .map((e)=>{ return arr.includes(e)? e:capitalize(e)})
              .join(" ")

  nameDiv.innerHTML = name
  console.log(name)
})
