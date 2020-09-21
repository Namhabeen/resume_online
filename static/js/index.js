$(document).ready(function(){
    $(window).scroll(function(){
        var scrollValue = $(document).scrollTop(); 
        if( scrollValue > $("#Jtitle").height()){
            $(".navbar").css({"background-color":"rgb(245, 221, 3)"});
            $(".navbar").css({"min-width":"100%"});   
            $(".navbar").css({"margin-top":"0px"}); 
            $(".nav-link").css({"color":"black"});
            $(".navbar-brand").css({"color":"black"});  
        }
        else{
            $(".navbar").css({"background":"none"});
            $(".navbar").css({"min-width":"100%"});   
            $(".navbar").css({"margin-top":"0px"}); 
            $(".nav-link").css({"color":"white"});
            $(".navbar-brand").css({"color":"white"}); 
        }
    })
})

var _showPage = function() {
    var loader = $("div.loader");
    var container = $("div.container");
    loader.css("display","none");
    container.css("display","block");
};

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}