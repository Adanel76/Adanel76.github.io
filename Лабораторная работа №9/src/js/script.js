const img_1 = document.querySelector('.imgBlock_1')
const img_2 = document.querySelector('.imgBlock_2')
const img_3 = document.querySelector('.imgBlock_2')
const btnNext = document.querySelector('.btnNext')
const btnBack = document.querySelector('.btnBack')
const imgResultBlock = document.querySelector('.imgResultBlock')
const imgBlock_1 = document.querySelector('.imgBlock_1')
const imgBlock_2 = document.querySelector('.imgBlock_2')
const imgBlock_3 = document.querySelector('.imgBlock_3')


let count = 1

const listenNextImg = () => {
    count += 1

    if (count == 4) count = 1

    if (count % 2 == 0) {
        imgResultBlock.style.background = 'url(https://indexiq.ru/storage/photo/resized/xy_682x1200/f/4laou09hm1zwjdg_66b1ecdb.jpg.webp) center center/cover no-repeat'
        imgBlock_1.classList.remove('imgBlockAlt')
        imgBlock_2.classList.add('imgBlockAlt')
        imgBlock_3.classList.remove('imgBlockAlt')
    }
    else if (count % 3 == 0) {
        imgResultBlock.style.background = 'url(https://indexiq.ru/storage/photo/resized/xy_682x1200/a/fh7iubcgw06fjxj_91f63b27.jpg.webp) center center/cover no-repeat'
        imgBlock_1.classList.remove('imgBlockAlt')
        imgBlock_2.classList.remove('imgBlockAlt')
        imgBlock_3.classList.add('imgBlockAlt')
    }
    else {
        imgResultBlock.style.background = 'url(https://indexiq.ru/storage/photo/resized/xy_682x1200/g/yds06ffzbqryib5_690f03ed.jpg.webp)'
        imgBlock_1.classList.add('imgBlockAlt')
        imgBlock_2.classList.remove('imgBlockAlt')
        imgBlock_3.classList.remove('imgBlockAlt')
    }

}

const listenBackImg = () => {
    count--
    console.log(count)

    if (count == -4) count = 0

    if (count % 2 == 0) {
        imgResultBlock.style.background = 'url(https://indexiq.ru/storage/photo/resized/xy_682x1200/f/4laou09hm1zwjdg_66b1ecdb.jpg.webp) center center/cover no-repeat'
        imgBlock_1.classList.remove('imgBlockAlt')
        imgBlock_2.classList.add('imgBlockAlt')
        imgBlock_3.classList.remove('imgBlockAlt')
    }
    else if (count % 3 == 0) {
        imgResultBlock.style.background = 'url(https://indexiq.ru/storage/photo/resized/xy_682x1200/a/fh7iubcgw06fjxj_91f63b27.jpg.webp) center center/cover no-repeat'
        imgBlock_1.classList.remove('imgBlockAlt')
        imgBlock_2.classList.remove('imgBlockAlt')
        imgBlock_3.classList.add('imgBlockAlt')
    }
    else {
        imgResultBlock.style.background = 'url(https://indexiq.ru/storage/photo/resized/xy_682x1200/g/yds06ffzbqryib5_690f03ed.jpg.webp)'
        imgBlock_1.classList.add('imgBlockAlt')
        imgBlock_2.classList.remove('imgBlockAlt')
        imgBlock_3.classList.remove('imgBlockAlt')
    }

}

btnNext.addEventListener('click', listenNextImg)
btnBack.addEventListener('click', listenBackImg)