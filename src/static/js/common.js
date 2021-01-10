$(document).ready(function () {
    var contSlider = new Swiper('.top-gallery', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var contSlider = new Swiper('.product-slider', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.prod-slider-next',
            prevEl: '.prod-slider-prev',
        }
    });

    $('.tabs-btn .tabs-btn__el').click(function () {
        $('.tabs-btn__el').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('data-tab');
        $('.action-tab').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.tabs-btn .tabs-btn__el:first-child').click();

    $('.city__input').keyup(function () {
        var value = $(this).val();
        if (value != '') {
            $('.city__res').addClass('is-active')
        } else {
            $('.city__res').removeClass('is-active')
        }
    });

    $('.header__city').click(function () {
        $('.modal-city, .overlay').fadeIn()
    })

    $('.modal__close').click(function () {
        $('.modal-city, .overlay').fadeOut()
    })

    $('.city__options a').click(function () {
        var text = $(this).html()
        $('.modal-city, .overlay').fadeOut()
        $('.header__city').html(text)
    })

    $(".catalog-list__more").click(function () {
        var $this = $(this);

        if (!$this.hasClass("is-active")) {
            $(".catalog-list__inner").slideUp();
            $(".catalog-list__more").removeClass("is-active");
        }

        $this.toggleClass("is-active");
        $this.next().slideToggle();
    });

    $(".catalog-list__more:first").click();

    $('.tagslist__more-btn').click(function (e) {
        e.preventDefault()
        $(this).toggleClass('is-active')
        $('.tagslist_catalog').toggleClass('is-active')
        if ($(this).hasClass('is-active')) {
            $(this).html('Свернуть')
        } else {
            $(this).html('Показать еще')
        }
    })

    $('.fotorama').fotorama({
        thumbwidth: 130,
        thumbheight: 130
    });
});


