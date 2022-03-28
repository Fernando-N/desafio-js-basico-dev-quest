const div = document.getElementsByTagName('div')

const alertConfirmation = confirm(
  'Seja bem vindo(a),aventureiro(a)! Gostaria de pagar R$ 50,00 para passara noite na nossa hospedagem?'
)

if (alertConfirmation == true) {
  div[0].innerHTML = 'Ótimo! Nós temos as melhores camas de toda a região!'
} else {
  div[0].innerHTML = 'Que pena! Você parecia ser uma pessoa mais legal'
}
