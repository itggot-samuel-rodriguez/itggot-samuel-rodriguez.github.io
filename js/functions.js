$(function() {
    new WOW().init();
    
    $("a.scroll").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

$(window).scroll(function(){
    console.log('hi');
    var wScroll = $(this).scrollTop();

    $('.forground').css({
        'transform' : 'translate(0px, -'+ wScroll /30 +'%)'
    });
    
    $('.mellanground').css({
        'transform' : 'translate(0px, '+ wScroll /30 +'%)'
    });
        $('.forground2').css({
        'transform' : 'translate(0px,'+ wScroll /60 +'%)'
    });
    
    $('.mellanground2').css({
        'transform' : 'translate(0px, -'+ wScroll /3 +'%)'
    });

    if(wScroll > $('.blog-posts').offset().top - $(window).height()){

        var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

        $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'
        });

        $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'
        });

    }
    

});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

