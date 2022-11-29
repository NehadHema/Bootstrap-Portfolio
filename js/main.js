let sectionAbout = $('.about').offset().top;
// console.log(sectionAbout);
$(window).scroll(function(){
    if($(window).scrollTop() >sectionAbout-100 ){
$('nav').css({'backgroundColor':'#4e4e4e','borderBottom':'#007aff','padding':'2px solid pink'})
    }
    else {
        $('nav').css({'backgroundColor':'transparent','borderBottom':'none','padding':'5px 0px'})
    
    }
});