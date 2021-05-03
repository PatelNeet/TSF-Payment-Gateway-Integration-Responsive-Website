$(document).ready(function(){
    $('.next').click(function(){
        // console.log("cliked")
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            nextImg.addClass('active').css('z-index',10);
        }
    });

    $('.prev').click(function(){
        // console.log("cliked")
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index',-10);
            prevImg.addClass('active').css('z-index',10);
        }
    });

});