var width = $(window).width();

if (width <= 600) {
    $('.desktopImage').attr("src", "images/image-hero-mobile.png");
    $('.desktopImage').addClass("moveImgUp");       
    $('.titleText').addClass("moveContentDown");       
    $('.title').addClass("titleH1");
    
}