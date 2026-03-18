
const START_MONEY = 1000000;
var Ownmoney = START_MONEY;
var stock_data = {
    "SKY_STOCK": {
        money: 500,
        number: 0
    },
    "NITTA": {
        money: 1500,
        number: 0
    },
    "TOYO": {
        money: 1000,
        number: 0
    },
    "ISC": {
        money: 1300,
        number: 0
    }
}

window.addEventListener('load', function () {
    
    document.querySelector(".possession_number").textContent = Ownmoney;
    generaize("SKY_STOCK")
    generaize("NITTA")
    generaize("TOYO")
    generaize("ISC")

})


function generaize(company ){
    document.querySelector("#" + company + " .stock_money").textContent = stock_data[company].money;
    document.querySelector("#" + company + " .stock_number").textContent = stock_data[company].number;
    
    var buy_button = document.querySelector("#" + company + " .buy_button");
    
    buy_button.addEventListener('click', function () {
        
        var buystocks = Number(prompt("何株購入しますか？"));
        if (Ownmoney >= stock_data[company].money * buystocks) {
            alert(buystocks + '株購入しました');

            stock_data[company].number = stock_data[company].number + buystocks;
            document.querySelector("#" + company + " .stock_number").textContent = stock_data[company].number;

            Ownmoney = Ownmoney - stock_data[company].money * buystocks
            document.querySelector(".possession_number").textContent = Ownmoney;
        }
        else {
            alert("購入できません")
        }
    });

    var sell_buutton = this.document.querySelector("#" + company + " .sell_button");
    sell_buutton.addEventListener("click", function () {
        var sellstocks = prompt("何株売却しますか？")
        if (sellstocks <= stock_data[company].number) {
            alert(sellstocks + '株売りました');

            stock_data[company].number = stock_data[company].number - sellstocks

            document.querySelector("#" + company + " .stock_number").textContent = stock_data[company].number;
            Ownmoney = Ownmoney + stock_data[company].money * sellstocks;

            document.querySelector(".possession_number").textContent = Math.ceil(Ownmoney);
        }
        else {
            alert("売却できません")
        }

    })
}
function showRandomNews() {
  const index = Math.floor(Math.random() * lists.length);
  document.getElementById("news").textContent = lists[index].news;

  var nowratos = lists[index].rato;
  var names = Object.keys(stock_data);
  for(var i=0;i<=3;i++){
    console.log(nowratos[i]);
    console.log(names[i]);
    var now_money = stock_data[names[i]].money;
    var new_money = now_money * nowratos[i];
    stock_data[names[i]].money = new_money;
    
    console.log(now_money)
    document.querySelector("#"+names[i]+" .stock_money").textContent = Math.ceil(stock_data[names[i]].money);
  }


}

const newsList = [
  "アメリカが自動車の関税を3%→25%、その他の輸入品を10%にした",
  "新しい人工知能の開発が進み、関連事業も含め業界全体の売り上げが前年の1.3倍になる",
  "関税は上がることになったが日米政府間での関税交渉が成立する",
  "日本国内の企業が海外に工場をたくさん作る"
]
const lists=[
    {news:"アメリカが自動車の関税を3%→25%、その他の輸入品を10%にした",rato:[1.2,0.95,1.0,1.0]},
    {news:"新しい人工知能の開発が進み、関連事業も含め業界全体の売り上げが前年の1.3倍になる",rato:[1.0,1.0,1.0,1.2]},
    {news:"関税は上がることになったが日米政府間での関税交渉が成立する",rato:[0.95,1.2,1.2,1.0]},
    {news:"日本国内の企業が海外に工場をたくさん作る",rato:[0.95,0.95,1.0,1,2]}
    

]


var isgaming=false;
let finishing;
var scoredata=[];

function gaming (){
    if(isgaming==false){
        
        isgaming=true;
        showRandomNews();
        var limitTime=10;
        var day=1;
        document.querySelector(".limit_time").textContent = limitTime;
        document.querySelector(".day").textContent = day;
        
        const limit=function (){
            sum_money = Ownmoney+
            stock_data["SKY_STOCK"]["money"]*stock_data["SKY_STOCK"]["number"]+
            stock_data["NITTA"]["money"]*stock_data["NITTA"]["number"]+
            stock_data["TOYO"]["money"]*stock_data["TOYO"]["number"]+
            stock_data["ISC"]["money"]*stock_data["ISC"]["number"];
            console.log(sum_money)




            if(limitTime>0){ //ゲーム中
                limitTime=limitTime-1;
                document.querySelector(".limit_time").textContent = limitTime;
                
                console.log(Number(limitTime));
            }
            else { //1日経ったとき
                lineConfig.data.datasets[0].data.push(sum_money)
                lineChart.destroy()
                lineChart = new Chart(lineCtx, lineConfig);
                day=day+1;
                if (sum_money>=START_MONEY){ //黒字の場合
                    document.querySelector(".resultprofit").textContent="あなたは"+Number(sum_money-START_MONEY)+"円黒字です"
                }
                else{ //赤字の場合
                    document.querySelector(".resultprofit").textContent="あなたは"+Number(sum_money-START_MONEY)+"円赤字です"
                }
                if(day>5){ //ゲーム終わったらポップアップを出す
                    document.querySelector(".clear").setAttribute("style", "display:block");
                    document.getElementById("result1").textContent = "あなたの最終総資産は " +  sum_money+"円です";
                    if(sum_money>=1000000){
                         document.getElementById("result2").textContent = "あなたは"+(sum_money-1000000)+"円の黒字です";
                    }
                    else{
                        document.getElementById("result2").textContent = "あなたは"+(sum_money-1000000)+"円の赤字です";

                    }



                    clearInterval(finishing);
                    return;
                }
                else{
                    document.querySelector(".day").textContent = day;
                    showRandomNews();
                    limitTime=10;
                }
            }
        }
        finishing =setInterval(limit,1000);

    
    }
    document.querySelector(".clear").setAttribute("style", "display:none"); //クリア画面を隠す

}




window.onload = function () {
    document.querySelector("#close_button").addEventListener('click', function () {
        document.querySelector(".clear").setAttribute("style", "display:none");
    })
}