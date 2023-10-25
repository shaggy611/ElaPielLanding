import 'normalize.css';
import './styles/fonts.scss'
import './styles/style.scss';
import './styles/style_mobile.scss';
import Gallery from './gallery';

// ======================================================

document.addEventListener('DOMContentLoaded', () => {

    if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 1;
    } else {
        document.body.scrollTop = 1;
    }

    setTimeout(function () {
        document.documentElement.style.scrollBehavior = "smooth";
    }, 2000)

    const productGallery_1 = document.querySelector('#product-gallery_1')
    const productGallery_2 = document.querySelector('#product-gallery_2')
    const menuToggler = document.querySelector('#show-mobile-menu')
    const mobileMenu = document.querySelector('#mobile-menu-roller-js')
    let slider = document.querySelector('.welcome-screen')
    const video = document.querySelector('#video_bg');
    const modalDopDownList = document.querySelector('.modal-screen__input-activity')
    const modalDopDownListTitle = document.querySelector('.modal-screen__input-activity-heading')
    const closeModal = document.querySelector('.modal-screen__button-close')
    const modalScreen = document.querySelector('.modal-screen')
    const modal = document.querySelector('.modal-screen__modal')
    const openModalButton = document.querySelectorAll('.open-modal-js')
    const formData = document.querySelector('#pop-up-form-js')
    const inputSubmition = document.querySelector('#modal-screen__input-submitiom')
    const fileInputCheck = document.querySelector('#modal-screen__input-file')
    const modalAlert = document.querySelector('.modal-screen__modal-alert')
    const activityCheckBoxes = document.querySelectorAll('.modal-screen__input-activity_checkbox')

    const options = {
        root: slider, // viewport
        rootMargin: '0px',
        threshold: 0.2 // якщо 50% елементу видно
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play(); // Відтворити відео, коли воно видно
                observer.unobserve(entry.target); // Припинити спостереження
            }
        });
    }, options);

    if (productGallery_1) {
        const gallery_1 = new Gallery('#product-gallery_1').initialize()
    }

    if (productGallery_2) {
        const gallery_2 = new Gallery('#product-gallery_2').initialize()
    }

    inputSubmition.addEventListener('click', function () {
        if (inputSubmition.checked) {
            fileInputCheck.disabled = false
        }
    })

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

    const fiveStepsSection = document.querySelector('.five-steps__scroll-spy-js')
    let scrollPosition
    let targetPosition

    if (fiveStepsSection) {
        window.addEventListener("scroll", function (e) {
            scrollPosition = window.scrollY
            targetPosition = fiveStepsSection.offsetTop

            if (scrollPosition >= (targetPosition - 350)) {
                fiveStepsSection.classList.add('activate-animation')
            }
        })
    }

    function mainScreenSlider() {
        let firstSliderChild = slider.firstElementChild
        let clone = firstSliderChild.cloneNode(true)

        slider.appendChild(clone)
        slider.classList.add('welcome-screen__slider-scroll-left')
        observer.observe(video);

        setTimeout(() => {
            firstSliderChild.remove()
            slider.classList.remove('welcome-screen__slider-scroll-left')
        }, 2000)

        addLIstenersforModalButton()
    }



    if (slider) {
        observer.observe(video);
        let interval = setInterval(mainScreenSlider, 5000)
    }

    if (modal) {
        modalDopDownList.addEventListener('click', function () {
            modalDopDownList.classList.toggle('modal-screen__input-activity--opened')
        })

        closeModal.addEventListener('click', closeModalPopUp)
        modalScreen.addEventListener('click', closeModalPopUp)
        addLIstenersforModalButton()

        activityCheckBoxes.forEach(item => {

            item.addEventListener('click', function (event) {

                let choosenParameter = event.target.parentNode.cloneNode(true)
                event.target.parentNode.remove()
                modalDopDownList.insertAdjacentElement('afterbegin', choosenParameter)
                modalDopDownList.classList.toggle('modal-screen__input-activity--opened')
                modalDopDownListTitle.style.display = 'none'

                activityCheckBoxes.forEach(function (otherRadioButton) {
                    console.log('check')
                    if (otherRadioButton !== item) {
                        otherRadioButton.checked = false;
                    }
                });
            })
        })
    }

    function addLIstenersforModalButton() {
        openModalButton.forEach(btn => {
            btn.addEventListener('click', function () {
                modalScreen.style.display = 'block'
                modal.style.display = 'block'
                document.body.style.setProperty('overflow', 'hidden')
            })
        })
    }

    function closeModalPopUp(event) {
        if (event.target.classList.contains('modal-screen__button-close-svg') || event.target.classList.contains('modal-screen') || event.target.classList.contains('pop-up-form-js')) {
            modalScreen.style.display = 'none'
            modal.style.display = 'none'
            document.body.style.setProperty('overflow-y', 'scroll')
        }
    }

    function copyFile(originalFile) {
        return new File([originalFile], originalFile.name, { type: originalFile.type });
    }

    formData.addEventListener('submit', function (event) {
        event.preventDefault()

        const fileInput = document.querySelector('#modal-screen__input-file')
        const chkbox_1 = document.querySelector('#modal-screen__input-activity_beauty-salon')
        const chkbox_2 = document.querySelector('#modal-screen__input-activity_beautician')
        const chkbox_3 = document.querySelector('#modal-screen__input-activity_aesthetic-clinic')
        const chkbox_4 = document.querySelector('#modal-screen__input-activity_trading')

        let data = new FormData(event.target)
        const nameSurname = data.get('name-surname')
        const email = data.get('email')
        const phone = data.get('phone')
        const city = data.get('city')
        let activity
        let docFile

        const sendData = {}

        if (fileInput.files.length > 0) {
            docFile = fileInput.files[0]
        }

        switch (true) {
            case chkbox_1.checked:
                activity = chkbox_1.name
                break;

            case chkbox_2.checked:
                activity = chkbox_2.name
                break;

            case chkbox_3.checked:
                activity = chkbox_3.name
                break;

            case chkbox_4.checked:
                activity = chkbox_4.name
                break;

            default:
                break;
        }

        if (nameSurname && email && phone && city && docFile && activity) {
            sendData.nameSurname = nameSurname
            sendData.email = email
            sendData.phone = phone
            sendData.city = city
            sendData.docFile = copyFile(docFile)
            sendData.activity = activity

            closeModalPopUp(event)
        } else {
            modalAlert.style.display = 'block'
        }
    })
})
