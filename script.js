$(document).ready(function () {

    // Send Email to Developer
    function sendMail(){
        phone_number =  $('#phone').val()
        from_name = $('#fname').val()
        from_email = $('#emailaddress').val()
        message = $('#commentarea').val()

        inputs = [phone_number,from_name,from_email,message]

        emailjs.send("WyneYbanez","template_huak0pk", {
            phone_number:  phone_number,
            from_name: from_name,
            from_email: from_email,
            message: message,
          })
          .then(
            function (response) {
              window.alert("Message Sent 👍");
              window.location.reload();
              console.log('SUCCESS', response)
            },
            function (error) {
              window.alert("Message failed to send 😔");
              console.log('FAILED', error)
            }
          )
        return false  
    }

    $("#Message-Form").on('submit', function() {
        sendMail();
    })

    // Transparent Scroll Effect of Navbar from: https://stackoverflow.com/questions/29646622/set-bootstrap-navbar-transparency-on-scroll
    function checkScroll(){
        var startY = $('.navbar').height() * 2; 

        if($(window).scrollTop() > startY){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
    }
        if($('.navbar').length > 0){
            $(window).on("scroll load resize", function(){
                checkScroll();
            });
        }
})




