$(document).ready(function () {
    // 下拉選單
    $('.wrap').on('click','.menu > li > .ask',function (e) {
        e.preventDefault();
        $('.down-menu').toggleClass('open');
        $('.fa-angle-right').toggleClass('fa-angle-right-t');
    });
    // jobBlock jobBox_imageOpen
    $('.wrap').on('click','.fa-plus',function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-plusOpen');
        $(this).parent().find('.jobBox').find('.jobBox_image').toggleClass('jobBox_imageOpen');
    });

    const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 2000, //下張計進入速度
    // effect: 'creative', //輪播樣式
    cubeEffect: {
        slideShadows: false,
    },
    
    autoplay: {
        delay: 1000,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    });


    // 回頂部
    $('.wrap').on('click','.fa-angle-double-up',function (e) {
        e.preventDefault();
        $('html,body').animate({ 
            scrollTop:0
        }, 1200);
    });
    

    // h3：邁向前端工程師/設計師之路
    var jobH3 = document.getElementById('jobH3');
    window.addEventListener('scroll', function() {
    var triggerPosition = window.innerHeight / 1;
    var elementPosition = jobH3.getBoundingClientRect().top;
    if (elementPosition <= triggerPosition) {
        jobH3.classList.add('animate__animated', 'animate__fadeInLeft');
    }
    });

    // jobItem：UI設計師 網頁設計師 前端工程師
    var jobBlockId = document.getElementById('jobBlockId');
    window.addEventListener('scroll', function() {
    var triggerPosition = window.innerHeight / 1;
    var elementPosition = jobBlockId.getBoundingClientRect().top;
    if (elementPosition <= triggerPosition) {
        jobBlockId.classList.add('animate__animated', 'animate__fadeInRight');
    }
    });

    // 線上及實體課的差異
    var tableId = document.getElementById('tableId');
    window.addEventListener('scroll', function() {
    var triggerPosition = window.innerHeight / 1;
    var elementPosition = tableId.getBoundingClientRect().top;
    if (elementPosition <= triggerPosition) {
        tableId.classList.add('animate__animated', 'animate__fadeInLeft');
    }
    });

    // 對我們的課程感興趣嗎？
    var interested = document.getElementById('interested');
    window.addEventListener('scroll', function() {
    var triggerPosition = window.innerHeight / 1;
    var elementPosition = interested.getBoundingClientRect().top;
    if (elementPosition <= triggerPosition) {
        interested.classList.add('animate__animated', 'animate__fadeInRight');
    }
    });

});