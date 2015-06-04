$(".design h3").mouseenter(function() {
    console.log("hov")
    $(".design").css({ '-webkit-clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -25%)',
        'clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -25%)'});
});

$(".design h3").mouseout(function() {
    $(".design").css({ '-webkit-clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -65%)',
        'clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -65%)'});
});


$(".develop h3").mouseenter(function() {
    $(".design").css({ '-webkit-clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -260%)',
        '-webkit-clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -260%)'});
});

$(".develop h3").mouseout(function() {
    $(".design").css({ '-webkit-clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -65%)',
        'clip-path': 'polygon(10% 100%, 9% 0, 100% 0, 100% -65%)'});
});


