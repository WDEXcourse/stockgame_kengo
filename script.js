var Ownmoney=10000000;

window.onload = function(){ 
    document.querySelector(".possession_number").textContent = Ownmoney;

}

function buy(){
    var buystocks =Number(prompt("何株購入しますか？"));
    
    var money=Number(document.querySelector(".stock_money").textContent);
    var number=Number(document.querySelector(".stock_number").textContent);
    if(Ownmoney>=money*buystocks){
    alert(buystocks+'株購入しました');
    document.querySelector(".stock_number").textContent = number + buystocks;
    Ownmoney=Ownmoney-money*buystocks
    document.querySelector(".possession_number").textContent = Ownmoney;
    }
    else{
        alert("購入できません")
    }
}

function sell(){
    
    var money=Number(document.querySelector(".stock_money").textContent);
    var number=Number(document.querySelector(".stock_number").textContent);

    var sellstocks =prompt("何株売却しますか？")
    if(sellstocks <=number){
        alert(sellstocks+'株売りました');
        document.querySelector(".stock_number").textContent = number - sellstocks; 
        Ownmoney=Ownmoney+money*sellstocks;
        
        document.querySelector(".possession_number").textContent = Ownmoney;
    }
    else{
        alert("売却できません")
    }
}