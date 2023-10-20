import 'normalize.css';
import './styles/fonts.scss'
import './styles/style.scss';
import './styles/style_mobile.scss';
import Gallery from './gallery';

// ======================================================

document.addEventListener('DOMContentLoaded', () => {

    const productGallery_1 = document.querySelector('#product-gallery_1')
    const productGallery_2 = document.querySelector('#product-gallery_2')

    if (productGallery_1) {
        const gallery_1 = new Gallery('#product-gallery_1').initialize()
    }

    if (productGallery_2) {
        const gallery_2 = new Gallery('#product-gallery_2').initialize()
    }
})

