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

    const appWrapper = document.querySelector('.app-wrapper')
    const productGallery_1 = document.querySelector('#product-gallery_1')
    const productGallery_2 = document.querySelector('#product-gallery_2')
    const menuToggler = document.querySelector('#show-mobile-menu')
    const mobileMenu = document.querySelector('#mobile-menu-roller-js')
    const slider = document.querySelector('.welcome-screen')
    const sliderLeftBtn = document.querySelector('.welcome-screen__slider-button-left')
    const sliderRightBtn = document.querySelector('.welcome-screen__slider-button-right')
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
    const activityCheckBoxes = document.querySelectorAll('.modal-screen__input-activity_checkbox-js')
    const globalEventListener = document.querySelector('.globalEventListener')
    const telegramChannelLink = 'https://web.telegram.org/'
    const threeSteps = document.querySelectorAll('.three-steps__step-item')
    const threeStepsSecondSlide = document.querySelector('.three-steps__step-item_2')
    const aboutSection = document.querySelector('.about')
    const aboutSectionHeadings = document.querySelectorAll('.about__info-heading')
    const partnersiptItems = document.querySelectorAll('.partnership__values_list-item')
    const partnershipSection = document.querySelector('.partnership')
    const fiveStepsSection = document.querySelector('.five-steps__scroll-spy-js')
    const sliderBlocks = document.querySelectorAll('.welcome-screen__slide')
    const cooperationItems = document.querySelectorAll('.cooperation__content__list-item')
    const callChat = document.querySelector('.call-chat')
    let modalDataAttribut
    let currentIndex = 0;
    let interval
    let scrollPosition
    let targetPosition
    let aboutSectionPosition
    let partnersiptItemsPosition

    globalEventListener.addEventListener('click', addLIstenersforModalButton)

    callChat.addEventListener('click', function () {
        document.querySelector('.messenger-backdrop').classList.toggle('active')
        callChat.classList.toggle('call-chat-clicked')
        document.querySelector('.viber').classList.toggle('viber-show')
        document.querySelector('.telegram').classList.toggle('telegram-show')
        document.querySelector('.call-chat-wrapper').classList.toggle('call-chat-wrapper-animate')
    })

    const options = {
        root: slider,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    if (productGallery_1) {
        const gallery_1 = new Gallery('#product-gallery_1').initialize()
    }

    if (productGallery_2) {
        const gallery_2 = new Gallery('#product-gallery_2').initialize()
    }

    menuToggler.addEventListener('click', function () {
        if (menuToggler.checked) {
            document.body.style.setProperty('overflow', 'hidden')
            document.documentElement.style.setProperty('overflow', 'hidden')
        } else {
            document.body.style.setProperty('overflow-y', 'scroll')
            document.documentElement.style.setProperty('overflow-y', 'scroll')
        }
    })

    mobileMenu.addEventListener('click', function (event) {
        if (event.target.classList.contains('mobile-menu__item_link')) {
            document.body.style.setProperty('overflow-y', 'scroll')
            document.documentElement.style.setProperty('overflow-y', 'scroll')
            menuToggler.checked = false
        }
    })

    cooperationItems.forEach(item => {
        item.addEventListener('click', function (event) {
            cooperationItems.forEach(item => {
                item.classList.remove('cooperation__content__list-item--hovered')
            })
            if (event.target.parentNode.classList.contains('cooperation__content__list-item')) {
                event.target.parentNode.classList.add('cooperation__content__list-item--hovered')
            } else {
                event.target.classList.add('cooperation__content__list-item--hovered')
            }
        })
    })

    if (fiveStepsSection || aboutSection || partnershipSection) {
        window.addEventListener("scroll", function (e) {
            scrollPosition = window.scrollY
            targetPosition = fiveStepsSection.offsetTop
            aboutSectionPosition = aboutSection.offsetTop
            partnersiptItemsPosition = partnershipSection.offsetTop

            if (scrollPosition >= (targetPosition - 450)) {
                fiveStepsSection.classList.add('activate-animation')
            }

            if (scrollPosition >= (aboutSectionPosition - 350)) {
                aboutSectionHeadings.forEach(item => {
                    item.classList.add('about__info-heading--appear')
                })
            }

            if (scrollPosition >= (partnersiptItemsPosition - 350)) {
                partnersiptItems.forEach(item => {
                    item.classList.add('partnership__values_list-item--animate')
                })
            }
        })
    }

    if (threeSteps) {
        threeStepsSecondSlide.classList.add('three-steps__step-item--hovered')

        threeSteps.forEach(item => {

            item.addEventListener('mouseover', function () {
                threeSteps.forEach(otherItem => {
                    if (otherItem.classList.contains('three-steps__step-item--hovered')) {
                        otherItem.classList.remove('three-steps__step-item--hovered')
                    } item.classList.add('three-steps__step-item--hovered')
                })
            })
        })

        threeSteps.forEach(item => {
            item.addEventListener('mouseout', function () {
                item.classList.remove('three-steps__step-item--hovered')
            })
        })
    }

    if (slider) {
        observer.observe(video);
        // let interval = setInterval(mainScreenSlider, 5000)
        interval = setInterval(mainScreenSliderRight, 5000);

        sliderLeftBtn.addEventListener('click', function () {
            clearInterval(interval)
            slider.classList.remove('welcome-screen__slider-scroll-left')
            mainScreenSliderLeft()
        })

        sliderRightBtn.addEventListener('click', function () {
            clearInterval(interval)
            slider.classList.remove('welcome-screen__slider-scroll-left')
            mainScreenSliderRight()
        })

        let startPosition = 0
        let deltaX = 0

        slider.addEventListener('touchstart', (e) => {
            startPosition = e.touches[0].clientX;
        });

        slider.addEventListener('touchmove', (e) => {
            const currentPosition = e.touches[0].clientX;
            deltaX = startPosition - currentPosition;
        });

        slider.addEventListener('touchend', (e) => {
            if (deltaX > 50) {
                clearInterval(interval)
                slider.classList.remove('welcome-screen__slider-scroll-left')
                mainScreenSliderRight()
                deltaX = 0;
            } else if (deltaX < -50) {
                clearInterval(interval)
                slider.classList.remove('welcome-screen__slider-scroll-left')
                mainScreenSliderLeft()
                deltaX = 0
            }
        })
    }

    if (modal) {
        modalDopDownList.addEventListener('click', function () {
            modalDopDownList.classList.toggle('modal-screen__input-activity--opened')
        })

        closeModal.addEventListener('click', closeModalPopUp)
        modalScreen.addEventListener('click', closeModalPopUp)

        modal.addEventListener('change', function (event) {
            if (event.target.classList.contains('modal-screen__input-activity_checkbox-js')) {
                modalCheckBoxCheck(event.target)
            }
        })
    }

    function modalCheckBoxCheck(element) {
        activityCheckBoxes.forEach(function (otherCheckbox) {
            if (otherCheckbox !== element) {
                otherCheckbox.checked = false;
            }

        });

        if (element.id === 'modal-screen__input-activity_beautician') {
            inputSubmition.disabled = false
            fileInputCheck.disabled = false

            inputSubmition.parentNode.classList.add('enabled')
            fileInputCheck.parentNode.classList.add('enabled')

            inputSubmition.parentNode.classList.remove('disabled')
            fileInputCheck.parentNode.classList.remove('disabled')
        } else {
            inputSubmition.disabled = true
            fileInputCheck.disabled = true

            inputSubmition.parentNode.classList.add('disabled')
            fileInputCheck.parentNode.classList.add('disabled')

            inputSubmition.parentNode.classList.remove('enabled')
            fileInputCheck.parentNode.classList.remove('enabled')
        }

        element.checked = true;
        let choosenParameter = element.parentNode
        modalDopDownList.insertBefore(choosenParameter, modalDopDownList.firstChild)
        modalDopDownList.classList.toggle('modal-screen__input-activity--opened')
        modalDopDownListTitle.style.display = 'none'
    }

    function addLIstenersforModalButton(event = undefined) {
        if (event && event.target.classList.contains('open-modal-js')) {
            if (event.target.dataset.name) {
                let checkedBeforeModal = document.querySelector(`#${event.target.dataset.name}`)

                activityCheckBoxes.forEach(function (otherCheckbox) {
                    if (otherCheckbox !== checkedBeforeModal) {
                        otherCheckbox.checked = false;
                    }
                });
                modalCheckBoxCheck(checkedBeforeModal)
                modalDopDownList.classList.remove('modal-screen__input-activity--opened')
            }
            modalScreen.style.display = 'block'
            modal.style.display = 'block'
            document.body.style.setProperty('overflow', 'hidden')
            document.documentElement.style.setProperty('overflow', 'hidden')
        } else {
            return
        }
    }

    function closeModalPopUp(event) {
        if (event.target.classList.contains('modal-screen__button-close-svg') || event.target.classList.contains('modal-screen') || event.target.classList.contains('pop-up-form-js')) {
            modalScreen.style.display = 'none'
            modal.style.display = 'none'
            document.body.style.setProperty('overflow-y', 'scroll')
            document.documentElement.style.setProperty('overflow-y', 'scroll')
        }
    }

    function copyFile(originalFile) {
        return new File([originalFile], originalFile.name, { type: originalFile.type });
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
        }, 3600)
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
            docFile = copyFile(fileInput.files[0])
        } else {
            docFile = ''
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

        if (nameSurname && email && phone && city && activity !== '' && activity !== 'Косметолог') {
            sendData.nameSurname = nameSurname
            sendData.email = email
            sendData.phone = phone
            sendData.city = city
            sendData.docFile = docFile
            sendData.activity = activity
            closeModalPopUp(event)
            // window.location.href = telegramChannelLink;
        }

        else if (nameSurname && email && phone && city && activity === 'Косметолог' && docFile) {
            sendData.nameSurname = nameSurname
            sendData.email = email
            sendData.phone = phone
            sendData.city = city
            sendData.docFile = docFile
            sendData.activity = activity
            closeModalPopUp(event)
            // window.location.href = telegramChannelLink;
        }

        else {
            modalAlert.style.display = 'block'
        }
    })
    function showSlide(index) {
        let translateValue = -index * sliderBlocks[0].offsetWidth;
        sliderBlocks.forEach(function (block) {
            block.style.transform = 'translateX(' + translateValue + 'px)';
        });
    }

    function mainScreenSliderRight() {
        currentIndex = (currentIndex + 1) % sliderBlocks.length;
        showSlide(currentIndex);

        if (currentIndex === 0) {
            clearInterval(interval);
            interval = setInterval(mainScreenSliderRight, 5000);

        }
    }

    function mainScreenSliderLeft() {
        currentIndex = (currentIndex - 1 + sliderBlocks.length) % sliderBlocks.length;
        showSlide(currentIndex);
    }
})
