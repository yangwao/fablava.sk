$(document).ready(function(){

    //for use within settings
    var coloursSet = false;
    var teamBio = $('.team-bio').text();

    $('.slide').css("opacity", 1);

    //initalize onepage scroll
    $(".main").onepage_scroll({
        sectionContainer: "section"
    });

    //cross browser opacity 
    $('.portfolio-item-overlay').css("opacity", 0);

    //MIX it up
    $('#Grid').mixitup();

    //initalize g maps
    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(51.511214, -0.119824),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI :  false
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    //initalize quote slider
    $( '#cbp-qtrotator' ).cbpQTRotator();

    //initalize big video
    var BV = new $.BigVideo({useFlashForFirefox:false});

    BV.init();
    if (Modernizr.touch) {
        BV.show('img/background1.jpg');
    } else {
        BV.show('video/timelapse.mp4',
            {ambient:true,
            doLoop:true,
            altSource:'video/timelapse.ogv'});

    }

    //animate in video so you dont see resize
    setTimeout( function () {
        $('#big-video-wrap').show().animate({opacity:1});

    }, 4500);

    /*=========================================
    =            Start adjustments            =
    =========================================*/
    
    $(".team-image-container" ).children('div').css( "opacity", 0);
    $('.bio-alt-text').css("opacity", 0);
    
    
    /*-----  End of Start adjustments  ------*/
    
    

    /*=====================================
    =            Work section             =
    =====================================*/
    
    
    $('.portfolio-item-overlay').on('click', function() {
        var title = $(this).next().data('title'),
            copy = $(this).next().data('copy'),
            img = $(this).next().find("img").eq(0).attr('src');

        $('.modal-title').text(title);
        $('.modal-body').children('p').text(copy);
        $('.modal-body').children('img').attr('src', img);

        $('#work-modal').modal('show');
    });

    $( ".portfolio-item-overlay" )
      .mouseenter(function() {
        $( this ).stop().animate({ opacity: 0.7 }, 500);

      })
      .mouseleave(function() {
        $( this ).stop().animate({ opacity: 0 }, 500);

    });
    
    for (var i = 0; i <= 8; i++) {

        var time = (2674 * i) * 0.8;

        $('#carousel-work-' + i).carousel({
          interval: time
        });
        
    };

    /*-----  End of Work section   ------*/
    
    

    /*==========================================
    =            Team hover effects            =
    ==========================================*/
    
    $( ".team-image-container" )
      .mouseenter(function() {
        $( this ).children('div').stop().animate({ opacity: 1 }, 500);

        var bio = $( this ).children('div').data('bio');
        $('.bio-text').addClass("hide").stop().animate({ opacity: 0 }, 500);
        $('.bio-alt-text').text(bio).removeClass("hide").stop().animate({ opacity: 1 }, 500);

      })
      .mouseleave(function() {
        $( this ).children('div').stop().animate({ opacity: 0 }, 500);
        $('.bio-text').removeClass("hide").stop().animate({ opacity: 1 }, 500);
        $('.bio-alt-text').addClass("hide").stop().animate({ opacity: 0 }, 500);
    });
    
    
    /*-----  End of Team hover effects  ------*/
    

    /*==================================
    =            Navigation            =
    ==================================*/

    //UI handle
    $('.location-scroll').on('click', function (e) {

        e.preventDefault();

        $('.onepage-pagination li:nth-child(5)').children().trigger('click');
    });

    $('.client-scroll').on('click', function (e) {

        e.preventDefault();

        $('.onepage-pagination li:nth-child(4)').children().trigger('click');
    });

    
    $('.onepage-pagination').addClass("animated fadeInUp delay-2");

    $('.onepage-pagination').children().each( function() {

        switch ($(this).children().data('index')) {

            case 1 :
                $(this).children().append("<i class='entypo-home'></i>");
            break;
            case 2 :
                $(this).children().append("<i class='entypo-users'></i>");
            break;
            case 3 :
                $(this).children().append("<i class='entypo-book'></i>");
            break;
            case 4 :
                $(this).children().append("<i class='entypo-heart'></i>");
            break;
            case 5 :
                $(this).children().append("<i class='entypo-mail'></i>");
            break;
        }
    });
    /*-----  End of Navigation  ------*/
    
    /*================================
    =            Settings            =
    ================================*/
    
    $('.settings-icon').on('click', function () {

        $(this).parent().toggleClass("open");

    });
    
    $('.toggle-video').on('click', function() {
        $('#big-video-wrap').toggleClass('hide-video');
    });


    /*-----  End of Settings  ------*/
    
});
