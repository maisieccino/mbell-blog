$('#header-down-button').click(function() {
    $('html, body').animate({
        scrollTop: $('#main').offset().top
    }, 1000);
});

var setMenuButtonIcon = function() {
    $('#menu-button i').toggleClass('fa-navicon');
    $('#menu-button i').toggleClass('fa-close');
};


$('#menu-button').click(function() {
    $('#menu-button, header, #main, footer').toggleClass('header-active');
    $('nav').toggleClass('nav-active');
    setMenuButtonIcon();
});

$('#main, footer, header').click(function() {
    if ($('#menu-button').hasClass('header-active')) {
        $('#menu-button, header, #main, footer').toggleClass('header-active');
        $('nav').toggleClass('nav-active');
        setMenuButtonIcon();
    }
});

$(document).keyup(function (event) {
    if ($(event.target).is('.search-blog') && event.which==13) {
        window.location.href="/search.html?q="+$('.search-blog').val();
    }
});

$('body').on('click','.notification-bar .fa-close', function() {
    $(this).parent().slideUp(500, function() {
        $(this).remove()
    });
});

$(document).ready(function() {
    $('.hero-header, .post-header').each(function() {
        $(this).append('<style>.hero-header:before,.post-header:before {background-image:url('+$(this).attr('data-img') + '); } </style>');
    });

    $('#main img').each(function() {
        var altText = $(this).attr('alt');
        if (typeof altText !== typeof undefined && altText !== false && altText!="") {
            $(this).after('<span class="img-caption"><i class="fa fa-image"></i> '+altText+'</span>');
        }
    })
});
