$(document).ready(function(){
    
    //sections backgrounds
    
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object   
        
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    });
    
    // first section
    $('#home .article').each(function(){
        var $artobj = $(this);
        var direction = $artobj.data('type');
        if(direction){
            var initvalue= parseInt($artobj.css(direction).replace(/[^-\d\.]/g, ''));    
        }
        $(window).scroll(function() {
            if(direction){
                var yPos = parseInt(-($(window).scrollTop() / $artobj.data('speed')));
                var coords = initvalue + yPos;
                $artobj.css(direction, coords) 
            }
            
        });
    })
    
    //second section
    $('#features .article').each(function(){
        var $artobj = $(this);
        var direction = $artobj.data('type');
        var limit = parseInt($artobj.data('limit'));
        if(direction){
            var initvalue= parseInt($artobj.css(direction).replace(/[^-\d\.]/g, ''));    
        }
        $(window).scroll(function() {
            if(direction){

                var yPos = parseInt(($(window).scrollTop() / $artobj.data('speed')));
                var coords = initvalue + yPos;
                if (coords <= limit){
                    $artobj.css(direction, coords) 
                }
            }
            
        });
    })
    
    // third section

    var $self = $("#how-to"),
    offsetCoords = $self.offset(),
    topOffset = offsetCoords.top;
    $('#how-to .article').each(function(){
        var $artobj = $(this);
        var direction = $artobj.data('type');
        var limit = parseInt($artobj.data('limit'));
        if(direction){
            var initvalue= parseInt($artobj.css(direction).replace(/[^-\d\.]/g, ''));    
        }
        $(window).scroll(function() {
            if ( ($(window).scrollTop() + $(window).height()) > (topOffset) &&
                ( (topOffset + $self.height()) > $(window).scrollTop() ) ) {
                if(direction){
                    var yPos = parseInt(($(window).scrollTop() / $artobj.data('speed')));
                    var coords = initvalue + yPos;
                    if(limit){
                        if (coords <= limit){
                            $artobj.css(direction, coords) 
                        }    
                    }else{
                        $artobj.css(direction, coords) 
                    }
                }
            }
        })
    })   
    
    // fourth section
    
    var $rself = $("#reviews"),
    roffsetCoords = $rself.offset(),
    rtopOffset = roffsetCoords.top;
    var $rartobj = $("#reviews_slider");
    var rdirection = $rartobj.data('type');
    var rlimit = parseInt($rartobj.data('limit'));
    if(rdirection){
        var rinitvalue= parseInt($rartobj.css(rdirection).replace(/[^-\d\.]/g, ''));    
    }
    $(window).scroll(function() {
        if ( ($(window).scrollTop() + $(window).height()) > (rtopOffset) &&
            ( (rtopOffset + $rself.height()) > $(window).scrollTop() ) ) {
            if(rdirection){
                var ryPos = parseInt(($(window).scrollTop() / $rartobj.data('speed')));
                var rcoords = rinitvalue + ryPos;
                if(rlimit){
                    if (rcoords <= rlimit){
                        $rartobj.css(rdirection, rcoords) 
                    }    
                }else{
                    $rartobj.css(rdirection, rcoords) 
                }
            }
        }
    })
    
    // fifth section
    
    var $jself = $("#join-us"),
    joffsetCoords = $jself.offset(),
    jtopOffset = joffsetCoords.top;
    $('#join-us .article').each(function(){
        var $jartobj = $(this);
        var jdirection = $jartobj.data('type');
        var jlimit = parseInt($jartobj.data('limit'));
        if(jdirection){
            var jinitvalue= parseInt($jartobj.css(jdirection).replace(/[^-\d\.]/g, ''));    
        }
        $(window).scroll(function() {
            if ( ($(window).scrollTop() + $(window).height()) > (jtopOffset) &&
                ( (jtopOffset + $jself.height()) > $(window).scrollTop() ) ) {
                if(jdirection){
                    var jyPos = parseInt(($(window).scrollTop() / $jartobj.data('speed')));
                    var jcoords = jinitvalue + jyPos;
                    if(jlimit){
                        if (jcoords <= jlimit){
                            $jartobj.css(jdirection, jcoords) 
                        }    
                    }else{
                        $jartobj.css(jdirection, jcoords) 
                    }
                }
            }
        })
    })
    
    // sixth section
    
    var $aself = $("#about-us"),
    aoffsetCoords = $aself.offset(),
    atopOffset = aoffsetCoords.top;
    $('#about-us .article').each(function(){
        var $aartobj = $(this);
        var adirection = $aartobj.data('type');
        var alimit = parseInt($aartobj.data('limit'));
        if(adirection){
            var ainitvalue= parseInt($aartobj.css(adirection).replace(/[^-\d\.]/g, ''));    
        }
        $(window).scroll(function() {
            if ( ($(window).scrollTop() + $(window).height()) > (atopOffset) &&
                ( (atopOffset + $aself.height()) > $(window).scrollTop() ) ) {
                if(adirection){
                    var ayPos = parseInt(($(window).scrollTop() / $aartobj.data('speed')));
                    var acoords = ainitvalue + ayPos;
                    if (acoords <= alimit){
                        $aartobj.css(adirection, acoords) 
                    }    
                }
            }
        })
    })
    
    //seventh section
    
    var $nself = $("#news"),
    noffsetCoords = $nself.offset(),
    ntopOffset = noffsetCoords.top;
    var $nartobj = $("#news_slider");
    var ndirection = $nartobj.data('type');
    var nlimit = parseInt($nartobj.data('limit'));
    if(ndirection){
        var ninitvalue= parseInt($nartobj.css(ndirection).replace(/[^-\d\.]/g, ''));    
    }
    $(window).scroll(function() {
        if ( ($(window).scrollTop() + $(window).height()) > (ntopOffset) &&
            ( (ntopOffset + $nself.height()) > $(window).scrollTop() ) ) {
            if(ndirection){
                var nyPos = parseInt(($(window).scrollTop() / $nartobj.data('speed')));
                var ncoords = ninitvalue + nyPos;
                if(nlimit){
                    if (ncoords <= nlimit){
                        $nartobj.css(ndirection, ncoords) 
                    }    
                }else{
                    $nartobj.css(ndirection, ncoords) 
                }
            }
        }
    })
    
    //eight section
    
    var $cself = $("#contact"),
    coffsetCoords = $cself.offset(),
    ctopOffset = coffsetCoords.top;
    var $cartobj = $("#map-canvas");
    var cdirection = $cartobj.data('type');
    var climit = parseInt($cartobj.data('limit'));
    if(cdirection){
        var cinitvalue= parseInt($cartobj.css(cdirection).replace(/[^-\d\.]/g, ''));    
    }
    $(window).scroll(function() {
        if ( ($(window).scrollTop() + $(window).height()) > (ctopOffset) &&
            ( (ctopOffset + $cself.height()) > $(window).scrollTop() ) ) {
            if(cdirection){
                var cyPos = parseInt(($(window).scrollTop() / $cartobj.data('speed')));
                var ccoords = cinitvalue + cyPos;
                if(climit){
                    if (ccoords <= climit){
                        $cartobj.css(cdirection, ccoords) 
                    }    
                }else{
                    $cartobj.css(cdirection, ccoords) 
                }
            }
        }
    })
    var win_width = $(window).width();
    //navigation arrows
    $(".nav_arr").each(function(){
        var nav_width = $(this).width();
        var left_distance = (win_width/2)-(nav_width/2);
        $(this).css('left', left_distance);
        $(this).css('display', 'block');
    })
    var menu_width = $(".menu_container").width();
    var menu_left_distance = (win_width/2)-(menu_width/2);
    $(".menu_container").css('left', menu_left_distance);
    $(".menu_container").css('display', 'block');
    
    $(".nav_arr").click(function(ev){
        ev.preventDefault();	
        $.scrollTo($(this).parent().attr('href'), 1200, {
            offset:-58
        } );
    });
    $(".menu a").click(function(ev){
        ev.preventDefault();	
        $.scrollTo($(this).attr('href'), 1200, {
            offset:-58
        } );
        $(".menu a").children('li').removeClass('active');
        $(this).children('li').addClass('active');
    }) 
    
    $("#join_submit").click(function(e){
        e.preventDefault();
        var subscriber = $("input[name=email]").val();
        //your email bellow
        var the_email = "example@yahoo.com";
        $.ajax({
            url: 'php/ajax_subscribe.php',
            type: 'POST',
            data:{
                my_email:the_email,
                his_email:subscriber
            }, 
            success:
            function(response){
                var msg=$.parseJSON(response);
                if(msg.response == 'ok'){
                    $("#join_us_form").html('<span class="response">Subscription sent</span>').show();
                }else{
                    $("#join_us_form").html(msg.response).show();
                }
            }
        })
    })
    
    function populate_twitter(){
        $.ajax({
            url: 'php/twitter_feed.php',
            type: 'POST',
            data:{
                
            }, 
            success:
            function(response){
                var msg=$.parseJSON(response);
                $("#twitter_ul").append(msg.response);
            }
        })
    }
    
    populate_twitter();
    
    var modulus = 0;
    $(window).scroll(function() {
        var floating = $(window).scrollTop()/710;
        var fixed = floating.toFixed();
        if(fixed != modulus){
            modulus = fixed;
            $("ul.menu li").removeClass("active");
            $("ul.menu li").eq(modulus).addClass("active");
        }
    });
    
});

var layer = new L.StamenTileLayer("toner");
var map = new L.Map("map-canvas", {
    scrollWheelZoom: false,
    center: new L.LatLng(37.78, -122.2),
    zoom: 12
});
map.addLayer(layer);

var circle = L.circle([37.75, -122.21], 1000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
circle.bindPopup("<img style='display:block;' src='images/contact_spot.png' alt='' />").openPopup();

$(window).load(function() {
    $('.flexslider').flexslider({
        slideshow: false
    });
    
});