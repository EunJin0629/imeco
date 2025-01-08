//공지사항 for문 돌리기 (tbody 영역)
for(let i=1; i<16; i++){
 let nTbody = document.getElementById("n_tbody")
 let nTr = document.createElement("tr")
 nTr.innerHTML = `
             <td><span id="num">${i}</span></td>
             <td><p>${i}번째 공지사항입니다.</p></td>
             <td><span id="date">2024.10.28</span></td>
 `

 nTbody.appendChild(nTr)
}

//자바스크립트
/* function activeBtn(button){
 //모든 버튼에서 active css 제거
 let Btn = document.querySelectorAll(".notice_btn button")
 for(let i=0; i<Btn.length; i++){
  Btn[i].classList.remove("active")
 }
 // 클릭한 버튼에 active 추가
 button.classList.add("active")
}

function ActiveClick(button){
 button.addEventListener("click",function(){
  activeBtn(this)
 })
}

let Btn = document.querySelectorAll(".notice_btn button")
for(let i=0; i<Btn.length; i++){
 ActiveClick(Btn[i])
} */

//제이쿼리 이용해서 클래스 / 아이디값 추가/제거 하기
// .removeClass > 클래스 제거 // addClass >> 클래스 추가

 /* function ActiveBtn(button){
  $(".notice_btn>button").removeClass("active")
  $(button).addClass("active")
 }

 function ActiveClick(button){
  $(button).on("click",function(){
   ActiveBtn(this)
  })
 }

 $(".notice_btn>button").each(function(){
  ActiveClick(this)
 }) */

  $(".notice_btn button").on("click",function(){
   $(".notice_btn button").removeClass("active")
   $(this).addClass("active")
  })