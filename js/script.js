const header = document.querySelector('.headerNavigation')
const them = document.querySelector('.btnThem')
const more = document.querySelector('.more')
const dropInfo = document.querySelector('.downInfo')
const dropPanel = document.querySelector('.dropPanel')
const headerLink = document.querySelector('.headerLinkMore')
const linkDrop = document.querySelectorAll('.linkDrop')
const navAlt = document.querySelector('.navAlt')
const hamburger = document.querySelector('.hamburger')
const themAlt = document.querySelector('.btnThemAlt')
const dropInfoAlt = document.querySelector('.dropInfoAlt')
const linkAltDrop = document.querySelector('.linkAltDrop')
const dropLinkAltBack = document.querySelector('.dropLinkAltBack')





if (!localStorage.them) localStorage.them = 'light'
document.body.classList = localStorage.them
them.innerText =  document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема'

them.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    them.innerText =  document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема'
    localStorage.them = document.body.classList || 'light'
})



if (!localStorage.themAlt) localStorage.themAlt = 'light'
document.body.classList = localStorage.themAlt
themAlt.innerText =  document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема'

themAlt.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    themAlt.innerText =  document.body.classList.contains('dark') ? 'Светлая тема' : 'Тёмная тема'
    localStorage.themAlt = document.body.classList || 'light'
})



const hamburgerClick = () => {
    isnavAlt = navAlt.classList.toggle('navAltAnimation')
    hamburger.classList.toggle('hambugerActive')
    if (isnavAlt) {
        hamburger.style.backgroundColor = '#000'
    } else {
        let scrollPos = window.scrollY

        if (scrollPos > 1) {
            hamburger.style.backgroundColor = '#000'
        } else {
            hamburger.style.backgroundColor = 'rgba(0, 0, 0, .4)'
        }
    }
}

hamburger.addEventListener('click', hamburgerClick)



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



const hamburgerScroll = () => {
    let scrollPos = window.scrollY

    if (scrollPos > 1) {
        hamburger.style. backgroundColor = '#000'
    } else {
        hamburger.style. backgroundColor = 'rgba(0, 0, 0, .4)'
    }
}

window.addEventListener('scroll', hamburgerScroll)



const linkAltDropClick = () => {
    dropInfoAlt.classList.add('dropInfoAltAnimation')
}

linkAltDrop.addEventListener('click', linkAltDropClick)


const linkAltDropBackClick = () => {
    dropInfoAlt.classList.remove('dropInfoAltAnimation')
}

dropLinkAltBack.addEventListener('click', linkAltDropBackClick)



const hamburgerBackClick = () => {
    dropInfoAlt.classList.remove('dropInfoAltAnimation')
}

hamburger.addEventListener('click', hamburgerBackClick)