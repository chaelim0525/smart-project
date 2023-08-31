$(document).ready(function(){
 
    // 마우스 오버시
    $("article").on("mouseenter",function(){

        // 변수 vid에 video 파일 참조
        // var vid=$(this).find("img").get(0);
        // 동영상의 재생 위치를 처음(0)으로 설정
        // vid.currentTime=0;
        // 동영상재생
        // vid.play();
        $(this).stop().animate({"width":"35%"},1000,function(){
            // article이 넓어진 바로 뒤에 아래 구문이 실행
            $(this).find("h3").stop().animate({"right":"10px"},400);
            $(this).find("p").stop().animate({"right":"10px"},800);
        });
        $(this).find("img").stop().animate({"opacity":"0.9"},1200);
    });


    // 마우스 아웃시
    $("article").on("mouseleave",function(){

        // 변수 vid에 video 파일 참조
        // var vid=$(this).find("img").get(0);
        // 동영상 정지
        // vid.pause();
        $(this).stop().animate({"width":"8%"},700);
        $(this).find("img").stop().animate({"opacity":"0"},2000);

        $(this).find("h3").stop().animate({"right":"-310px"},200);
        $(this).find("p").stop().animate({"right":"-310px"},500);
    });
});