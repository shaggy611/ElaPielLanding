import 'normalize.css';
import './styles/fonts.scss'
import './styles/style.scss';
import './styles/style_mobile.scss';
import Gallery from './gallery';

// ======================================================

document.addEventListener('DOMContentLoaded', () => {

    const productGallery_1 = document.querySelector('#product-gallery_1')
    const productGallery_2 = document.querySelector('#product-gallery_2')
    const menuToggler = document.querySelector('#show-mobile-menu')
    const mobileMenu = document.querySelector('#mobile-menu-roller-js')

    if (productGallery_1) {
        const gallery_1 = new Gallery('#product-gallery_1').initialize()
    }

    if (productGallery_2) {
        const gallery_2 = new Gallery('#product-gallery_2').initialize()
    }

    menuToggler.addEventListener('click', function () {
        if (menuToggler.checked) {
            document.body.style.setProperty('overflow', 'hidden')
        } else {
            document.body.style.setProperty('overflow-y', 'scroll')
        }
    })

    mobileMenu.addEventListener('click', function (event) {
        if (event.target.classList.contains('mobile-menu__item_link')) {
            document.body.style.setProperty('overflow-y', 'scroll')
            menuToggler.checked = false
        }
    })

})

const fiveStepsSection = document.querySelector('.five-steps__scroll-spy-js')
let scrollPosition
let targetPosition

window.addEventListener("scroll", function (e) {
    scrollPosition = window.scrollY
    targetPosition = fiveStepsSection.offsetTop

    if (scrollPosition >= (targetPosition - 350)) {
        fiveStepsSection.classList.add('activate-animation')
    }
})
