$(function() {
    
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fix Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* scroll plavno */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });
    
    /* 
    var elem = document.getElementsByClassName('knop')[0];
    var demo = document.getElementById('test');
    
    elem.addEventListener("mouseover", function() {
        demo.innerHTML = elem.getAttribute("data-clipboard-text");
    });
    
    
   
    elem.addEventListener("mouseout", function() {
        demo.innerHTML = "";
    }); */
    
    
    
    
})
