// Scroll Effect of Navbar from: https://bootsnipp.com/snippets/kl8Q3

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('navbar');
    }

    else {
          $('nav').removeClass('navbar');
    }
})