const div = document.getElementsByTagName('div')

function boletoPago() {
  let paidTicket = true

  if (paidTicket) {
    div[0].innerText = 'O boleto está pago'
  }
}

function boletoNaoPago() {
  let paidTicket = false

  if (paidTicket == false) {
    div[0].innerText = 'O boleto não está pago'
  }
}
