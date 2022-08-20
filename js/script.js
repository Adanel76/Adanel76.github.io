const header = document.querySelector('.headerNavigation')
const them = document.querySelector('.btnThem')
const more = document.querySelector('.more')
const dropInfo = document.querySelector('.downInfo')
const dropPanel = document.querySelector('.dropPanel')
const headerLink = document.querySelector('.headerLinkMore')
const linkDrop = document.querySelectorAll('.linkDrop')




if (!localStorage.them) localStorage.them = 'light'
document.body.classList = localStorage.them
them.innerText =  document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема'

them.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    them.innerText =  document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема'
    localStorage.them = document.body.classList || 'light'
})



const scrollWatch = () => {
    let scrollPos = window.scrollY

    if (scrollPos > 1) {
        header.classList.add('titleBlack')
    } else {
        header.classList.remove('titleBlack')

    }
}

document.addEventListener('DOMContentLoaded', scrollWatch)

window.addEventListener('scroll', scrollWatch)


const clickWatch = () => {
    isDropBool = dropInfo.classList.toggle('dropPanel')

    const dropTimeTrue = () => {
        if (isDropBool) {
            for (let i = 0; i < linkDrop.length; i++) {
                linkDrop[i].style.display = 'block'
            }
        } 
    }

    const dropTimeFalse = () => {
        if (isDropBool === false) {
            for (let i = 0; i < linkDrop.length; i++) {
                linkDrop[i].style.display = 'none'
            }
        }
    }

    setTimeout(dropTimeTrue, 300)

    setTimeout(dropTimeFalse, 100)
}

more.addEventListener('click', clickWatch)



const moreTopWatch = () => {
    headerLink.classList.toggle('headerLinkTop')
}

more.addEventListener('click', moreTopWatch)



click = 0

const linkClick = () => {
    click += 1
    
    if (click % 2 === 0) {
        headerLink.style.borderRadius = '10px'
        headerLink.style.transition = '0.5s all ease-in-out'
    } else {
        headerLink.style.borderRadius = '10px 10px 0 0'
        headerLink.style.transition = '0.2s all ease-in-out'
    }
}

more.addEventListener('click', linkClick)
