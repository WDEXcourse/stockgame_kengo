var Ownmoney = 10000000;
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



window.onload = function () {
    document.querySelector(".possession_number").textContent = Ownmoney;
    generaize("SKY_STOCK")
    generaize("NITTA")
    generaize("TOYO")
    generaize("ISC")

}

function generaize(company) {
    document.querySelector("#" + company + " .stock_money").textContent = stock_data[company].money;
    document.querySelector("#" + company + " .stock_number").textContent = stock_data[company].number;

    var buy_button = document.querySelector(".buy_button");

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

    var sell_buutton = this.document.querySelector(".sell_button");
    sell_buutton.addEventListener("click", function () {
        var sellstocks = prompt("何株売却しますか？")
        if (sellstocks <= stock_data[company].number) {
            alert(sellstocks + '株売りました');
            stock_data[company].number = stock_data[company].number - sellstocks
            document.querySelector("#" + company + " .stock_number").textContent = stock_data[company].number;
            Ownmoney = Ownmoney + stock_data[company].money * sellstocks;

            document.querySelector(".possession_number").textContent = Ownmoney;
        }
        else {
            alert("売却できません")
        }

    })
}