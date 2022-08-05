const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// show sub menu element 

const elementMenu = $('.element-menu')
const menuSubElement = $('.elements-sub__container')

elementMenu.addEventListener('mouseover', () => { 
    menuSubElement.classList.add('elements-sub__container--active')

    menuSubElement.addEventListener('mouseover', () => { 
        menuSubElement.classList.add('elements-sub__container--active')
    })

    menuSubElement.addEventListener('mouseout', () => { 
        menuSubElement.classList.remove('elements-sub__container--active')
    })
})

elementMenu.addEventListener('mouseout', () => { 
    menuSubElement.classList.remove('elements-sub__container--active')
})

//  Scroll to Show Element

const tourElement = $('.tour-container')
const bestTour = $('.best-tour')
const videoReview = $('.video-review__content')
const popularTour = $('.popular-tour')

document.addEventListener('scroll', function(e) { 
    if(document.documentElement.scrollTop >= 400) { 
        tourElement.style.display = "block"
    }
    if(document.documentElement.scrollTop >= 1400) { 
        bestTour.style.display = "block"
    }
    if(document.documentElement.scrollTop >= 2500)
    { 
        videoReview.style.display = "block"
    }
    if(document.documentElement.scrollTop >= 3000) {
        popularTour.style.display = "block"
    }

    console.log(document.documentElement.scrollTop);
})
 
// validate footer

const valueEmailInput = $('.footer__subscribe-email')
const valueNameInput = $('.footer__subscribe-name')

const notifyEmail = $('.notify__email')
const notifyName = $('.notify__name')
const subscribeBtn = $('.footer__subscribe-accept')

subscribeBtn.addEventListener("click", getValue); 

function getValue () { 
    const valueEmail = valueEmailInput.value
    const valueName = valueNameInput.value

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(valueName === '') { 
        notifyName.style.display = "flex" 

        setTimeout(function() {
            notifyName.style.display = "none"
        },1000)
    }

    else {
        if(regexEmail.test(valueEmail) === false) { 
        notifyEmail.style.display = "flex"

        setTimeout(function() {
            notifyEmail.style.display = "none"
        },1000)
        }
        else { 
            alert('Dang ky thanh cong')
        } 
    }
} 

// open and close video review 
const btnPlay = $('.video-review__play')
const modalVideo = $('.modal-video')
const closeBtn = $('.modal-video__close-icon')
const video = $('.modal__audio')
const modalContainer = $('.modal-video__container')

const showVideo = () => {
    modalVideo.classList.add("modal--open");
    video.play()
}

const hideVideo = () => { 
    modalVideo.classList.remove("modal--open");
    video.pause()
}

btnPlay.addEventListener('click',showVideo)

closeBtn.addEventListener('click',hideVideo)

modalVideo.addEventListener('click',hideVideo)

modalContainer.addEventListener('click',(e) => {
    e.stopPropagation()
})

// open and close login and register form 
const btnUser = $('.info__user')
const UserForm = $('.modal-login')
const loginForm = $('.modal-login__container')
const registerForm = $('.modal-regeister__container')
var isLogin = true

const btnLoginInLogin = $('.js-login__login')
const btnRegisterInLogin = $('.js-login__register')
const btnLoginInRegister = $('.js-register__login')
const btnRegisterInRegister = $('.js-register__register')

const modalLoginContainer = $('.modal-login')


btnUser.addEventListener('click', () => {
    UserForm.classList.add('modal-login--open')
    loginForm.classList.add('modal-login__container--open')
    btnLoginInLogin.classList.add('modal-login__option-btn--active')
    loginForm.style.animation = 'modalFadeIn 0.8s ease-in-out'
})

btnRegisterInLogin.addEventListener('click', () => { 
    loginForm.classList.remove('modal-login__container--open')
    registerForm.classList.add('modal-regeister__container--open')
    btnLoginInLogin.classList.remove('modal-login__option-btn--active')
    btnRegisterInRegister.classList.add('modal-login__option-btn--active')
    loginForm.style.animation = ''
    isLogin = !isLogin
})

btnLoginInRegister.addEventListener('click', () => {
    registerForm.classList.remove('modal-regeister__container--open')
    loginForm.classList.add('modal-login__container--open')
    btnLoginInLogin.classList.add('modal-login__option-btn--active')
    btnRegisterInRegister.classList.remove('modal-login__option-btn--active')
    isLogin = !isLogin
})

modalLoginContainer.addEventListener('click', () => {
    UserForm.classList.remove('modal-login--open')
})

loginForm.addEventListener('click', (e) => {
    e.stopPropagation()
})  
registerForm.addEventListener('click', (e) => {
    e.stopPropagation()
})


