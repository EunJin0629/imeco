//플러스를 클릭했을 때,
$("#plus").click(function(){
//숫자가 증가
//num에 있는 텍스트를 불러옴.(문자상태)
//숫자로 변환 > parseInt()
//숫자로 변환한 값을 변수에 담기
let plusNum = parseInt($("#num").text())
plusNum++
$("#num").text(plusNum)
priceTotal(plusNum)
})

//마이너스를 클릭했을 때
$("#minus").click(function(){
 let minusNum = parseInt($("#num").text())
 if (minusNum > 1){
 minusNum--
 $("#num").text(minusNum)
 priceTotal(minusNum)
}
})

let price = 25000

function priceTotal(cnt){
let Total = cnt * price
$(".price").text(Total.toLocaleString() + "원")
//.toLocaleString()>>숫자를 문자로 변환
}

//thumb를 클릭했을 때
//배경색은 검정 i태그는 흰색, span 태그도 흰색 & span태그의 텍스트 +1

/* $(".thumb").click(function(){
 $(this).css("background","#000000")
 $(this).find("i").css("color","#ffffff")
 $(this).find("span").css("color","#ffffff")
 //find() >> 아래있는 태그를 찾을 때 사용하는 함수
 let thumbCnt = parseInt($(this).find(".cnt").text())
 thumbCnt++
 $(this).find(".cnt").text(thumbCnt)
}) */

//한개의 태그에 두개의 효과를 내는 것을 toggle이라고 함

$(".thumb").click(function(){
 let like = $(this).data("clicked")
 if(like){
  $(this).css("background","#ffffff")
  $(this).find("i").css("color","#000000")
  $(this).find("span").css("color","#000000")
  //find() >> 아래있는 태그를 찾을 때 사용하는 함수
  let thumbCnt = parseInt($(this).find(".cnt").text())
  $(this).find(".cnt").text(thumbCnt-1)
 }else{
  $(this).css("background","#000000")
  $(this).find("i").css("color","#ffffff")
  $(this).find("span").css("color","#ffffff")
  //find() >> 아래있는 태그를 찾을 때 사용하는 함수
  let thumbCnt = parseInt($(this).find(".cnt").text())
  $(this).find(".cnt").text(thumbCnt+1)
 }
 $(this).data("clicked",!like)
 //! > 부정문
 //data("clicked",!like) >> 클릭되지 않은 상태
})

//리뷰 버튼 활성화
$(".review_btn button").on("click",function(){
 $(".review_btn button").removeClass("active_btn")
 $(this).addClass("active_btn")
})

//상품문의 버튼 활성화
$(".inquiry_btn button").on("click",function(){
 $(".inquiry_btn button").removeClass("active_inq")
 $(this).addClass("active_inq")
})

//pro_menu 스크롤
$(window).scroll(function(){
 if($(this).scrollTop() >= 680){
  $(".pro_menu").addClass("fixed")
 }else{
  $(".pro_menu").removeClass("fixed")
 }
})

//상품메뉴를 클릭했을 때, 부드럽게 이동하기

$(".pro_menu li").click(function(){
//active 효과 넣기
$(".pro_menu li").removeClass("active")
$(this).addClass("active")

 //1. 위치값 (변동이 있기 때문에 const X >> let)
 let targetId
 if($(this).hasClass("page1")){
  //hasClass() >> 실제 html안에 page라는 클래스가 존재하는지 확인하는 메서드
  // if($(this).hasClass("page1")) >> 만약 상품메뉴에 page1이라는 클래스 값이 존재한다면 ?? 클릭했을 때 어떻게 할거냐?
  //pro_page라는 클래스로 보내겠다.
  targetId = ".pro_page"
 }else if($(this).hasClass("page2")){
  targetId = ".pro_information"
 }else if($(this).hasClass("page3")){
  targetId = ".pro_review"
 }else if($(this).hasClass("page4")){
  targetId = ".pro_inquiry"
 }

 let offset = 0;

 $("html,body").animate({
  scrollTop: $(targetId).offset().top - offset -320
  // 상단부터 스크롤되게 할 건데 조건은
  // 우리가 targetId로 받은 값을 상단에서부터 움직임을 주겠다.
 })
})