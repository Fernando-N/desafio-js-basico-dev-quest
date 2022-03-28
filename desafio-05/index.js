for (let index = 0; index <= 10; index++) {
  const p = document.createElement('p')
  p.innerText = `o dobro do ${index} e ${index * 2} `
  document.body.appendChild(p)
}
