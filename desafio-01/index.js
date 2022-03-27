function verifyUser() {
  let userName = window.prompt('Digite seu nome:')
  let div = window.document.getElementsByTagName('div')
  div[0].innerHTML = `Seja bem vindo ${userName}!!`

  if (userName == '') {
    userName = prompt('Nome Obrigatório')
    div[0].innerHTML = `Seja bem vindo ${userName}!!`

    return
  }
}

verifyUser()
