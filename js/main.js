$( document ).ready(function() {

//About Section 1

//Sections
    var $designSection = $(".design");
    var $developSection = $(".develop");
//Headers
    var $developHeader = $(".develop h3");
    var $designHeader = $(".design h3");

//Design Content
    var $designContent = $(".design-content");
    var $designImage = $(".design-content img.vector");
    var $designText = $(".design-content .text p");

//Develop Content
    var $developContent = $(".develop-content");
    var $developImage = $(".develop-content img.vector");
    var $developText = $(".develop-content .text p");


    var toggle = 0;
    $designContent.click(function() {
        $designSection.toggleClass("active");
        $developHeader.stop().fadeToggle("slow");
        if(toggle === 0){
            $designContent.stop().animate({
                margin: "-5% -7%"
            }, 1000);
            $designHeader.animate({
                fontSize: "7rem"
            },800);
            $designImage.delay(800).animate({
                opacity: 1,
                width: "30%"
            }, 2400);
            $designText.delay(1200).animate({
                opacity: 1,
                fontSize: "1.3rem"
            }, 2400);
            $developContent.css("pointer-events", "none");
            toggle = 1;
        }
        else if (toggle === 1){
            console.log(toggle);
            $designContent.stop().animate({
                margin: "12% -12%"
            }, 800);
            $designHeader.animate({
                fontSize: "5rem"
            },800);
            $designImage.stop().animate({
                opacity: 0
            },0);
            $designText.stop().animate({
                opacity: 0
            },0);
            $developContent.css("pointer-events", "visible");
            toggle = 0;
        }
    });

    $developContent.click(function() {
        $designSection.toggleClass("develop-active");
        $developSection.toggleClass("active");
        $designHeader.fadeToggle("slow");
        if(toggle === 0){
            $developContent.stop().animate({
                margin: "-5% 34%"
            }, 1000);
            $developHeader.animate({
                fontSize: "7rem"
            },800);
            $developImage.delay(800).animate({
                opacity: 1,
                width: "30%"
            }, 2400);
            $developText.delay(1200).animate({
                opacity: 1,
                fontSize: "1.3rem"
            }, 2400);
            $designContent.css("pointer-events", "none");
            toggle = 1;
        }
        else if (toggle === 1){
            console.log(toggle)
            $developContent.stop().animate({
                margin: "12% 52%"
            }, 800);
            $developHeader.animate({
                fontSize: "5rem"
            },800);
            $developImage.stop().animate({
                opacity: 0
            },0);
            $developText.stop().animate({
                opacity: 0
            },0);
            $designContent.css("pointer-events", "visible");
            toggle = 0;
        }
    });

//Activate carousal

$('.carousel').carousel({
    interval: false
});

//Parallax

    $(".contact-landing").each(function(){
        $(this).parallax('50%', 0.2, true)
    });


    $('iframe').load( function() {
        $('iframe').contents().find("head")
            .append($("<style type='text/css'>  body{display:none !important;}  </style>"));
    });

}); //Document ready
