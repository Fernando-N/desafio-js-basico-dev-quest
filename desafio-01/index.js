let userName = window.prompt('Digite seu nome:')

let div = window.document.getElementsByTagName('div')

div[0].innerHTML = `Seja bem vindo ${userName}!!`
