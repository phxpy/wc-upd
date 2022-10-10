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
