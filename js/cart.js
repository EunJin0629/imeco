function totalPrice(){
 let price = parseInt($("#price").text().replace(/,/g,''))
 let delivery = parseInt($("#delivery").text().replace(/,/g,''))
 let sale = parseInt($("#sale").text().replace(/,/g,''))
 //$("#price").text() >> 문자x >> 숫자o
 //parsInt() >> 문자를 숫자로 변환
 //replace() >> 문자나 숫자를 다른걸로 대체할 때 사용하는 메소드
 // /,/ << ,를 찾아서 g < 바꿔줌 '' < 빈칸
 let total = price + delivery - sale
 $("#total").text(total)
}

totalPrice()

function PayTotal(){
 let pay = parseInt($("#pay").text().replace(/,/g,''))
 let paySale = parseInt($("#pay_sale").text().replace(/,/g,''))
 let payDelivery = parseInt($("#pay_delivery").text().replace(/,/g,''))
 let payTotal = pay - paySale + payDelivery
 $("#pay_total").text(payTotal+"원")
}

PayTotal()