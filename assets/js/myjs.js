/* portofolio */
$(document).ready(function () {
    var $container = $('.portofolio-list');
    $container.isotope({
        filter: '*',
        animationOptions:{
            duration:750,
            easing:'linear',
            queue:false
        }
    });
    /* portofolio menu */
    var click_portofolio = '.portofolio-menu a';
    $(click_portofolio).click(function () { 
        $(click_portofolio).removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter:selector,
            animationOptions:{
                duration:750,
                easing:'linear',
                queue:false
            }
        });
        return false;
    });
    
    /* scroll top */
    var click_top_nav = '.top-nav a';

    $('.scroll').on('click', function (e) { 
        var sectionTo = $(this).attr('href');
        var element = $(sectionTo);        
        $('body, html').animate({
            scrollTop: element.offset().top - 60
        }, 1000);
        console.log(element.offset().top);

        e.preventDefault();
    });    

    $(window).scroll(function(){
        if($(window).scrollTop() < 587 ){
            $(click_top_nav).removeClass('active');
        }
        if($(window).scrollTop() >= 587 ){
            $(click_top_nav).removeClass('active');
            $('#menuAbout').addClass('active'); 
        }
        if($(window).scrollTop() >= 1061 ){
            $(click_top_nav).removeClass('active');
            $('#menuProjects').addClass('active'); 
        }
        if($(window).scrollTop() >= 1400 ){
            $(click_top_nav).removeClass('active');
            $('#menuContact').addClass('active'); 
        }
    });
});