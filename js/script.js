/* let center = document.querySelector(".center") // js
let centerList = document.querySelector(".center_list") // js

function centerListOver(){
 centerList.style.display="block"
}

center.addEventListener("mouseover",centerListOver) */




//link영역 가로 스크롤

let linkList = document.getElementById("link_list")
let prevBtn = document.getElementById("prev").querySelector("button")
let nextBtn = document.getElementById("next").querySelector("button")

let ListIndex = 0 // 링크안에 있는 첫번째 항목을 지정
let ListShow = 7 // 화면에 보여지는 갯수
let ListAll = linkList.children.length // 링크리스트 안에 있는 자식들의 개수

function ListUpdate(){
 let offset = -ListIndex*(100/ListShow) // 보여지는 리스트의 항목을 중심으로 너비를 계산하는 계산식
 linkList.style.transform = `translateX(${offset}%)` // 왼쪽 방향으로 얼만큼 이동할지 지정 // % >> style의 단위값을 %로 넣었기 때문
 prevBtn.disabled = ListIndex == 0
 //disabled >> 비활성화 // 항목이 왼쪽으로 이동했기 때문에 다시 처음 항목으로 돌아오면 prev는 비활성화 되야함!
 nextBtn.disabled = ListIndex >= Math.ceil(ListAll  /ListShow) -1
 //Math.ceil() >> 소수점 이하 항목을 올림하여 정수로 만들어 주는 매서드 >> 절대 0 이 나올 수가 없는 메서드 >> 0을 출력하지 않을 때 사용하는 메서드
 //모든 항목의 개수인 13이 되면 next버튼은 비활성화 되야 함.
}

function prevClick(){
 if(ListIndex > 0){
  ListIndex--
  ListUpdate()
 }
}

prevBtn.addEventListener("click",prevClick)

function nextClick(){
 if(ListIndex < Math.ceil(ListAll / ListShow) -1){
  ListIndex++
  ListUpdate()
 }
}
nextBtn.addEventListener("click",nextClick)

//메인 슬라이드
let swiper = new Swiper(".mySwiper", {
 loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});