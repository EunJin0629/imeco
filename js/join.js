// 년,월,일 만들기
let yearSelect = document.getElementById("year")

for(let year=2024; year>1930; year--){
 let yearOption = document.createElement("option")
 yearOption.value = year
 yearOption.textContent = year
 yearSelect.appendChild(yearOption)
}
//월 
let monthSelect = document.getElementById("month")

for(let month=1; month<13; month++){
 let monthOption = document.createElement("option")
 monthOption.value = month
 monthOption.textContent = month
 monthSelect.appendChild(monthOption)
}

//일 
let daySelect = document.getElementById("day")

for(let day=1; day<32; day++){
 let dayOption = document.createElement("option")
 dayOption.value = day
 dayOption.textContent = day
 daySelect.appendChild(dayOption)
}

//전체동의 선택하기
function allCheck(allAgree){
 let Agree = document.querySelectorAll(".agree input[type='checkbox']")
 for(let i=0; i<Agree.length; i++){
  Agree[i].checked = allAgree.checked
 }
}