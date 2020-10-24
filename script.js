// Transparent Scroll Effect of Navbar from: https://bootsnipp.com/snippets/kl8Q3
// Transparent Navbar Scroll Effect - WebCifar : https://www.youtube.com/watch?v=ZFQkb26UD1Y&list=LL&index=16&t=11023s

// $(window).on("scroll", function() {
//     if($(window).scrollBottom()) {
//           $('nav').removeClass('navbar');
//     }
//     else {
//           $('nav').addClass('navbar');
//         //   removeClass('navbar')
//     }
// })

document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
     if(scroll_position > 450){
        header.style.backgroundColor = ""; 
    }else{
        header.style.backgroundColor = "transparent";
    }
});