import 'normalize.css';
import './styles/fonts.scss'
import './styles/style.scss';
import './styles/style_mobile.scss';
import Gallery from './gallery';

// ======================================================

document.addEventListener('DOMContentLoaded', () => {

    const productGallery_1 = document.querySelector('#product-gallery_1')
    const productGallery_2 = document.querySelector('#product-gallery_2')

    // function showBlockWhedView() {
    //     let scrollPosition = window.screenY
    //     let targetPosition = fiveStepsSection.offsetTop

    //     if (scrollPosition >= 100) {
    //         console.log('Користувач прокрутив до цільового елемента');
    //         fiveStepsSection.classList.add('activate-animation')
    //     }
    // }

    if (productGallery_1) {
        const gallery_1 = new Gallery('#product-gallery_1').initialize()
    }

    if (productGallery_2) {
        const gallery_2 = new Gallery('#product-gallery_2').initialize()
    }
})

const fiveStepsSection = document.querySelector('#five-steps__scroll-spy-js')
let scrollPosition
let targetPosition

window.addEventListener("scroll", function (e) {
    scrollPosition = window.scrollY
    targetPosition = fiveStepsSection.offsetTop

    if (scrollPosition >= (targetPosition - 150)) {
        fiveStepsSection.classList.add('activate-animation')
    }
})
