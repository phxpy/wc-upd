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
    const swiperScrollbar = document.querySelector(".swiper-scrollbar")
    const breakpoint768 = window.matchMedia("(min-width: 768px)");
    let swiper;

    const enableSwiper = function() {
        swiper = new Swiper('.about__slider', {
            // Optional parameters
            slidesPerView: "auto",
            spaceBetween: 15,
            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
                scrollbarDraggable: false,
                scrollbarHide: false,
                dragSize: "100"
            },
            on: {
                setTranslate(sw, translate) {
                    // swiperScrollbar.style.left = sw.passedParams.spaceBetween + translate * ((sw.virtualSize - swiperScrollbar.offsetWidth) / sw.virtualSize) + "px"
                    swiperScrollbar.style.left = sw.passedParams.spaceBetween + swiperScrollbar.offsetWidth * (translate / sw.virtualSize) + "px"
                }
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
    const swiperScrollbar = document.querySelector(".meetings__scrollbar")

    const swiper = new Swiper('.meetings__slider', {
        // Optional parameters
        slidesPerView: "auto",
        spaceBetween: 15,
        // And if we need scrollbar
        scrollbar: {
            el: '.meetings__scrollbar',
            scrollbarDraggable: false,
            scrollbarHide: false,
            dragSize: "100"
        },
        on: {
            setTranslate(sw, translate) {
                // swiperScrollbar.style.left = sw.passedParams.spaceBetween + translate * ((sw.virtualSize - swiperScrollbar.offsetWidth) / sw.virtualSize) + "px"
                swiperScrollbar.style.left = sw.passedParams.spaceBetween + swiperScrollbar.offsetWidth * (translate / sw.virtualSize) + "px"
            }
        },
        breakpoints: {
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
