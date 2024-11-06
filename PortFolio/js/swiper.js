var bullet = ["INTRO", "SKILLS", "WORK", "CONTACT"];
const swiper = new Swiper(".first", {
    // Optional parameters
    direction: "vertical",
    touchRatio: 0,
    mousewheel: true,
    speed: 1000,
    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return (
                '<div class="' +
                className +
                '"><span>' +
                bullet[index] +
                "</span></div>"
            );
        },
    },
});

const swiper2 = new Swiper(".second", {
    // Optional parameters
    spaceBetween: 100,
    loop : true,
    direction: "horizontal",

    // Navigation arrows
    navigation: {
        nextEl: ".next",
        prevEl: ".back",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar1",
    },
});
