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

function blockBodyScroll(state) {
    if (state) {
        document.body.classList.add("blocked")
    } else {
        document.body.classList.remove("blocked")
    }
}
