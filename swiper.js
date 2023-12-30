const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },

    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',  // Optional: can be 'bullets', 'fraction', 'progressbar', or 'custom'
    } 
});

/*
swiper.addEventListener('mouseenter', () => {
    console.log('Mouse entered the slider');
    // Your code for mouse enter event
});

swiper.addEventListener('mouseleave', () => {
    console.log('Mouse left the slider');
    // Your code for mouse leave event
});
*/