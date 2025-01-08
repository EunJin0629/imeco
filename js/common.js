// 고객센터
$(".center").mouseover(function(){
 $(".center_list").css({display:"block"})
})
$(".center").mouseleave(function(){
 $(".center_list").css({display:"none"})
})

// 카테고리
$(".category").mouseover(function(){
 $(".sub_category").css({display:"block"})
})
$(".category").mouseleave(function(){
 $(".sub_category").css({display:"none"})
})

// topBtn클릭시 상단으로 이동하기

let topBtn = document.getElementById("topBtn")
function topBtnClick(){
 window.scrollTo({ // window >> 화면전제를 선택하는 메서드
  //scrollTo >> 스크롤이 발생되도록하는 메서드
  top:0, // 위치 >> top:0 제일 상단으로 스크롤되게 하겠다.
  behavior:'smooth' // behavior >> 스크롤이 어떻게 일어날지 행동을 제약함. // smooth >> 부드럽게
 })
}

topBtn.addEventListener("click",topBtnClick)

//message 창띄우기
let mOpen = document.getElementById("m_open")
let mClose = document.getElementById("m_close")
let messageWrap = document.querySelector(".message_wrap")

function mOpenClick(){
 mOpen.style.display="none"
 mClose.style.display="block"
 messageWrap.style.display="block"
}

mOpen.addEventListener("click",mOpenClick)

function mCloseClick(){
 mOpen.style.display="block"
 mClose.style.display="none"
 messageWrap.style.display="none"
}

mClose.addEventListener("click",mCloseClick)

//header htop 스크롤시 사라지기
let htop = document.querySelector(".htop")

function headerScorll(){
 if(window.scrollY > 100){
  htop.style.marginTop="-90px"
 }else{
  htop.style.marginTop="0"
 }
}

window.addEventListener("scroll",headerScorll)
