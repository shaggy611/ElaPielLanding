export default class Gallery {
    constructor(gallery_initialize) {
        this.productGallery_1 = document.querySelector(`${gallery_initialize}`)
        this.productGallery_list = document.querySelector(`${gallery_initialize} .top-products__product-gallery_preview`)
        this.productGalleryArrowRight = document.querySelector(`${gallery_initialize} .top-products__product-gallery_arrow-right`)
        this.productGalleryArrowLeft = document.querySelector(`${gallery_initialize} .top-products__product-gallery_arrow-left`)
        this.productGalleryItem = document.querySelector(`${gallery_initialize} .top-products__product-gallery_item img`)
        this.productGalleryView = document.querySelector(`${gallery_initialize} .top-products__product-gallery_view img`)
        this.lens = document.querySelector(`${gallery_initialize} .top-products__product-gallery_lense`)
        this.imageLens = document.querySelector(`${gallery_initialize} .top-products__product-gallery_image-view`)
        this.productGalleryViewBlock = document.querySelector(`${gallery_initialize} .top-products__product-gallery_view`)
    }

    initialize() {
        // Initialize first gallery`s image on first load
        this.productGalleryView.src = this.productGalleryItem.getAttribute('src')
        // Click listener on gallery`s preview images
        this.productGallery_list.addEventListener('click', (event) => {
            // Change Gallery View Image after click on previews images
            if (event.target.classList.contains('top-products__product-gallery_image')) {
                const getImgUrl = event.target.getAttribute('src')
                this.productGalleryView.src = getImgUrl
            }
        })
        // Click listener for gallery arrows
        this.productGalleryArrowRight.addEventListener('click', () => {
            let firstGalleryChild = this.productGallery_list.firstElementChild
            let clone = firstGalleryChild.cloneNode(true)

            this.productGallery_list.appendChild(clone)
            this.productGallery_list.classList.add('top-products__product-gallery_preview-scroll-up')

            setTimeout(() => {
                firstGalleryChild.remove()
                this.productGallery_list.classList.remove('top-products__product-gallery_preview-scroll-up')
            }, 700)
        })

        this.productGalleryArrowLeft.addEventListener('click', () => {
            let lastGalleryChild = this.productGallery_list.lastElementChild
            let clone = lastGalleryChild.cloneNode(true)

            this.productGallery_list.insertAdjacentElement('afterbegin', clone)
            // productGallery_list.style.transform = 'translateY(-144px)'
            this.productGallery_list.classList.add('top-products__product-gallery_preview-scroll-down')

            setTimeout(() => {
                lastGalleryChild.remove()
                this.productGallery_list.classList.remove('top-products__product-gallery_preview-scroll-down')
            }, 700)
        })

        this.productGalleryViewBlock.addEventListener("mousemove", this.moveLens.bind(this));
        this.productGalleryViewBlock.addEventListener("mouseenter", this.showLens.bind(this));
        this.productGalleryViewBlock.addEventListener("mouseleave", this.hideLens.bind(this));


    }

    moveLens(e) {
        let imageRect = this.imageLens.getBoundingClientRect();
        let x = e.clientX - imageRect.left;
        let y = e.clientY - imageRect.top;

        let lensSize = 150;
        let lensX = x - lensSize / 2;
        let lensY = y - lensSize / 2;

        if (x > 0 && x < imageRect.width && y > 0 && y < imageRect.height) {
            this.lens.style.display = "block";
            this.lens.style.backgroundPosition = `-${(x * 2 - lensSize) + 50}px -${(y * 2 - lensSize) + 50}px`;
            this.lens.style.left = `${lensX}px`;
            this.lens.style.top = `${lensY}px`;
        } else {
            this.hideLens();
        }
    }

    showLens() {
        this.lens.style.display = "block";
        this.lens.style.backgroundSize = `${this.imageLens.width * 2}px ${this.imageLens.height * 2}px`;
        this.lens.style.backgroundImage = `url('${this.imageLens.src}')`;
        this.lens.style.backgroundRepeat = 'no-repeat'
    }

    hideLens() {
        this.lens.style.display = "none";
    }

}