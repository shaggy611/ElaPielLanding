import 'normalize.css';
import './styles/fonts.scss'
import './styles/style.scss';
import './styles/style_mobile.scss';
import Gallery from './gallery';

// ======================================================

document.addEventListener('DOMContentLoaded', () => {

    const productGallery_1 = document.querySelector('#product-gallery_1')
    const productGallery_2 = document.querySelector('#product-gallery_2')
    // const productGallery_list = $('#product-gallery_1 .top-products__product-gallery_preview')
    // const productGalleryArrowRight = $('#product-gallery_1 .top-products__product-gallery_arrow-right')
    // const productGalleryArrowLeft = $('#product-gallery_1 .top-products__product-gallery_arrow-left')
    // const productGalleryItem = $('#product-gallery_1 .top-products__product-gallery_item img')
    // const productGalleryView = $('#product-gallery_1 .top-products__product-gallery_view img')
    // const lens = $("#product-gallery_1 .top-products__product-gallery_lense")
    // const image = $("#product-gallery_1 .top-products__product-gallery_image-view")
    // const productGalleryViewBlock = $("#product-gallery_1 .top-products__product-gallery_view")


    if (productGallery_1) {
        const gallery_1 = new Gallery('#product-gallery_1').initialize()
        // // Initialize first gallery`s image on first load
        // productGalleryView.src = productGalleryItem.getAttribute('src')
        // // Click listener on gallery`s preview images
        // productGallery_list.addEventListener('click', function (event) {
        //     // Change Gallery View Image after click on previews images
        //     if (event.target.classList.contains('top-products__product-gallery_image')) {
        //         const getImgUrl = event.target.getAttribute('src')
        //         productGalleryView.src = getImgUrl
        //     }
        // })
        // // Click listener for gallery arrows
        // productGalleryArrowRight.addEventListener('click', function () {
        //     let firstGalleryChild = productGallery_list.firstElementChild
        //     let clone = firstGalleryChild.cloneNode(true)

        //     productGallery_list.appendChild(clone)
        //     productGallery_list.classList.add('top-products__product-gallery_preview-scroll-up')

        //     setTimeout(() => {
        //         firstGalleryChild.remove()
        //         productGallery_list.classList.remove('top-products__product-gallery_preview-scroll-up')
        //         res()
        //     }, 700)
        // })

        // productGalleryArrowLeft.addEventListener('click', function () {
        //     let lastGalleryChild = productGallery_list.lastElementChild
        //     let clone = lastGalleryChild.cloneNode(true)

        //     productGallery_list.insertAdjacentElement('afterbegin', clone)
        //     // productGallery_list.style.transform = 'translateY(-144px)'
        //     productGallery_list.classList.add('top-products__product-gallery_preview-scroll-down')

        //     setTimeout(() => {
        //         lastGalleryChild.remove()
        //         productGallery_list.classList.remove('top-products__product-gallery_preview-scroll-down')
        //         res()
        //     }, 700)
        // })

        // productGalleryViewBlock.addEventListener("mousemove", moveLens);
        // productGalleryViewBlock.addEventListener("mouseenter", showLens);
        // productGalleryViewBlock.addEventListener("mouseleave", hideLens);

        // function moveLens(e) {
        //     const imageRect = image.getBoundingClientRect();
        //     const x = e.clientX - imageRect.left;
        //     const y = e.clientY - imageRect.top;

        //     console.log(x)

        //     const lensSize = 150;
        //     const lensX = x - lensSize / 2;
        //     const lensY = y - lensSize / 2;

        //     if (x > 0 && x < imageRect.width && y > 0 && y < imageRect.height) {
        //         lens.style.display = "block";
        //         lens.style.backgroundPosition = `-${(x * 2 - lensSize) + 50}px -${(y * 2 - lensSize) + 50}px`;
        //         lens.style.left = `${lensX}px`;
        //         lens.style.top = `${lensY}px`;
        //     } else {
        //         hideLens();
        //     }
        // }

        // function showLens() {
        //     lens.style.display = "block";
        //     lens.style.backgroundSize = `${image.width * 2}px ${image.height * 2}px`;
        //     lens.style.backgroundImage = `url('${image.src}')`;
        //     lens.style.backgroundRepeat = 'no-repeat'
        // }

        // function hideLens() {
        //     lens.style.display = "none";
        // }


    }
})

