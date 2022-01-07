new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',

        clickable: true,
        
    },

    loop: true,

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    speed: 800,

});