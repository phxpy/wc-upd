// polifill to fix vh units for some modals
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// menu

(function() {
    const menu = document.querySelector(".menu");
    const menuToggle = document.querySelector(".header__menu-btn");

    menuToggle.addEventListener("click", () => {
        if (!menuToggle.classList.contains("header__menu-btn--closed")) {
            menuToggle.classList.add("header__menu-btn--closed")
            menu.classList.add("menu--opened")
            blockBodyScroll(true)
        } else {
            menuToggle.classList.remove("header__menu-btn--closed")
            menu.classList.remove("menu--opened")
            blockBodyScroll(false)
        }
    })
})();

// vacancies

(function() {
    const vacanciesBtn = document.querySelector(".forums__vacancies");
    const vacancies = document.querySelector(".vacancies");
    const vacanciesCloseBtn = document.querySelector(".vacancies__close-btn");
    const vacanciesBackdrop = document.querySelector(".vacancies__backdrop");

    vacanciesBtn.addEventListener("click", e => {
        e.preventDefault()
        vacancies.classList.add("vacancies--open")
        blockBodyScroll(true)
    });

    vacanciesCloseBtn.addEventListener("click", closeVacancies)
    vacanciesBackdrop.addEventListener("click", closeVacancies)

    function closeVacancies() {
        vacancies.classList.remove("vacancies--open")
        blockBodyScroll(false)
    }

})();

// ticker cloning

(function() {
    const ticker = document.querySelector('.ticker');
    const tickerBody = document.querySelector('.ticker__body');
    const clone = tickerBody.cloneNode(true);

    ticker.append(clone)
})();

// hero clouds cloning

(function() {
    const cloudsWrap = document.querySelector('.hero__bg-wrap');
    const clouds = document.querySelector('.hero__bg');
    const clone = clouds.cloneNode(true);

    cloudsWrap.append(clone)
})();

// "About us" swiper initialization

(function() {
    const breakpoint768 = window.matchMedia("(min-width: 768px)");
    let swiper;

    const enableSwiper = function() {
        swiper = new Swiper('.about__slider', {
            // Optional parameters
            slidesPerView: "auto",
            spaceBetween: 15,
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar'
            }
        });
    }

    const checkWindowWidth = function() {
        if (breakpoint768.matches) {
            if (swiper !== undefined) {
                swiper.destroy(true, true)
            }
        } else {
            enableSwiper()
        }
    }

    checkWindowWidth()
    window.onresize = checkWindowWidth
})();

// "Meetings" swiper initialization

(function() {
    const swiper = new Swiper('.meetings__slider', {
        // Optional parameters
        slidesPerView: "auto",
        spaceBetween: 15,
        // And if we need scrollbar
        scrollbar: {
            el: '.meetings__scrollbar'
        },
        breakpoints: {
            320: {
                spaceBetween: 15,
                scrollbar: {
                    enabled: true
                }
            },
            768: {
                spaceBetween: 20,
                scrollbar: {
                    enabled: false
                },
                navigation: {
                    nextEl: '.meetings__slider-btn--next',
                    prevEl: '.meetings__slider-btn--prev',
                }
            }
        }
    });
})();

// Reviews swiper init

(function() {
    const swiper = new Swiper('.reviews__slider', {
        // Optional parameters
        slidesPerView: "1",
        spaceBetween: 30,
        // And if we need scrollbar
        pagination: {
            el: ".reviews__pagination",
            type: "bullets"
        },
        breakpoints: {
            768: {
                spaceBetween: 40,
                pagination: {
                    enabled: false
                },
                navigation: {
                    nextEl: '.reviews__slider-btn--next',
                    prevEl: '.reviews__slider-btn--prev',
                }
            },
            1200: {
                spaceBetween: 1000,
                pagination: {
                    enabled: false
                },
                navigation: {
                    nextEl: '.reviews__slider-btn--next',
                    prevEl: '.reviews__slider-btn--prev',
                }
            }
        }
    });
})();

// form open

(function() {
    const signupBtns = document.querySelectorAll(".btn--signup");
    const signinBtns = document.querySelectorAll(".btn--signin");
    const formSignup = document.querySelector(".form-signup");
    const formSignin = document.querySelector(".form-signin");
    const formRestore = document.querySelector(".form-restore");

    signupBtns.forEach(btn => {
        btn.addEventListener("click", openSingupForm)
    })

    signinBtns.forEach(btn => {
        btn.addEventListener("click", openSinginForm)
    })

    function openSinginForm() {
        formSignin.classList.add("form--opened")
        blockBodyScroll(true)

        formSignin.querySelector(".form__backdrop").addEventListener("click", () => {
            formSignin.classList.remove("form--opened")
            blockBodyScroll(false)
        })

        formSignin.querySelector(".form__controls-forget").addEventListener("click", e => openRestoreForm(e))

        formSignin.querySelector(".form__close-btn").addEventListener("click", () => {
            formSignin.classList.remove("form--opened")
            blockBodyScroll(false)
        })

        formSignin.querySelector(".form__bottom-link").addEventListener("click", () => {
            formSignin.classList.remove("form--opened")
            openSingupForm()
        })
    }

    function openSingupForm() {
        formSignup.classList.add("form--opened")
        blockBodyScroll(true)

        formSignup.querySelector(".form__backdrop").addEventListener("click", () => {
            formSignup.classList.remove("form--opened")
            blockBodyScroll(false)
        })

        formSignup.querySelector(".form__close-btn").addEventListener("click", () => {
            formSignup.classList.remove("form--opened")
            blockBodyScroll(false)
        })

        formSignup.querySelector(".form__bottom-link").addEventListener("click", () => {
            formSignup.classList.remove("form--opened")
            openSinginForm()
        })
    }

    function openRestoreForm(e) {
        e.preventDefault()
        formSignin.classList.remove("form--opened")
        formRestore.classList.add("form--opened")

        formRestore.querySelector(".form__backdrop").addEventListener("click", () => {
            formRestore.classList.remove("form--opened")
            blockBodyScroll(false)
        })

        formRestore.querySelector(".form__close-btn").addEventListener("click", () => {
            formRestore.classList.remove("form--opened")
            blockBodyScroll(false)
        })

        formRestore.querySelector(".form__bottom-link").addEventListener("click", () => {
            formRestore.classList.remove("form--opened")
            openSingupForm()
        })
    }
})();

function blockBodyScroll(state) {
    if (state) {
        document.body.classList.add("blocked")
        document.documentElement.classList.add("blocked")
    } else {
        document.body.classList.remove("blocked")
        document.documentElement.classList.remove("blocked")
    }
}

// policy

(function() {
    const policyBtn = document.querySelector(".footer__notification");
    const policyModal = document.querySelector(".policy");

    policyBtn.addEventListener("click", e => {
        e.preventDefault()
        policyModal.classList.add("form--opened")
        blockBodyScroll(true)

        policyModal.querySelector(".form__backdrop").addEventListener("click", () => {
            policyModal.classList.remove("form--opened")
            blockBodyScroll(false)
        })

        policyModal.querySelector(".form__close-btn").addEventListener("click", () => {
            policyModal.classList.remove("form--opened")
            blockBodyScroll(false)
        })
    })
})();

// verticals

(function() {
    const textSwiper = new Swiper('.verticals__text-list-wrap', {
        // Optional parameters
        slidesPerView: 1,
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.verticals__pagination',
            type: 'bullets',
        },
        breakpoints: {
            768: {
                allowTouchMove: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                width: 360,
                spaceBetween: 30,
                pagination: {
                    el: '.verticals__pagination',
                    type: 'bullets',
                }
            },
            1200: {
                allowTouchMove: false,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                width: 500,
                spaceBetween: 30,
                pagination: {
                    el: '.verticals__pagination',
                    type: 'bullets',
                }
            }
        }
    });

    const podiumSwiper = new Swiper('.verticals__list-wrap', {
        // Optional parameters
        slidesPerView: "auto",
        centeredSlides: true,
        thumbs: {
            swiper: textSwiper
        }
    });
})();
