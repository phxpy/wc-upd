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
        swiper = new Swiper('.swiper', {
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
