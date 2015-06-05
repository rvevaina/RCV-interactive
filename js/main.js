var $designHeader = $(".design h3");
var $designSection = $(".design");
var $developHeader = $(".develop h3");
var $developSection = $(".develop");


$designHeader.mouseenter(function() {
    $designSection.addClass("active");
    $developHeader.fadeOut();
    $designHeader.stop().animate({
        marginTop: "-15%"
    }, 800);
});

$designHeader.mouseout(function() {
    $designSection.removeClass("active");
    $developHeader.fadeIn();
    $designHeader.stop().animate({
        marginTop: "3%"
    }, 800);
});


$developHeader.mouseenter(function() {
    $designSection.addClass("develop-active");
    $developSection.addClass("active");
    $designHeader.animate({
        opacity: 0
    }, 800);
});

$developHeader.mouseout(function() {
    $designSection.removeClass("develop-active");
    $developSection.removeClass("active");
    $designHeader.animate({
        opacity: 1
    }, 800);
});


