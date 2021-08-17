
const app = document.querySelector('[data-js="app"]')
const link = document.querySelector('[data-js="link"]')


app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
link.addEventListener('click', (event) => {

  event.preventDefault()
  if (app.style.visibility !== 'hidden') {
    app.style.visibility = "hidden"
  } else {
    app.style.visibility = "visible"
  }

}, false)
