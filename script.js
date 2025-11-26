function buy(){
    var money=Number(document.querySelector(".stock_money").textContent);
    var number=Number(document.querySelector(".stock_number").textContent);
    alert('10株購入しました');
    document.querySelector(".stock_number").textContent = number + 10;
}

//できたら、株数がマイナスにならないようにしてほしい。
function sell(){
    alert('10株売りました');
}