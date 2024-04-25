const basketBtn = document.querySelector('.btnBuy')
const vanishAlertBlock = document.querySelector('.vanishAlertBlock')

let basketAlertNone = () => {
    vanishAlertBlock.style.opacity = '0'
}


let basketAlert = () => {
    vanishAlertBlock.style.opacity = '1'
    setTimeout(basketAlertNone, 4000)
}

basketBtn.addEventListener('click', basketAlert)



document.addEventListener('click', )