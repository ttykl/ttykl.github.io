function countone() {
    var count = document.getElementById('count') //计算按钮                    
    count.onclick = function () {
        var visitorllerOne = document.getElementById('needvisitor').value, //获取需要的访客数
            needconversion = document.getElementById('needconversion').value //预计转化率
        quantityOne = document.getElementById('needquantity'), //获取预计刷单量
            shopvisitorTwo = document.getElementById('shopvisitor').value, //获取店铺的访问量
            shopConversion = document.getElementById('shopconversion').value, //获取店铺的转化率
            quantityTwo = document.getElementById('shopquantity'), //获取店铺的实际销量
            lastQuantity = document.getElementById('lastquantity'), //获取需要的刷单数
            SevenTotal = document.getElementById('SevenTotal');
        FifteenTotal = document.getElementById('FifteenTotal');
        quantityOne.value = Math.round(visitorllerOne * needconversion)
        quantityTwo.value = Math.round(shopvisitorTwo * shopConversion)
        lastQuantity.value = quantityOne.value - quantityTwo.value
        SevenTotal.value = lastQuantity.value * 7
        FifteenTotal.value = lastQuantity.value * 15

        var num1 = SevenTotal.value;
        var num2 = 5;
        console.log((num1 - num2 * 7) / 7)
        console.log((num1 - num2 * 7) / 15)
    }
}

function countTwo() {
    var btn1 = document.getElementById('go')
    btn1.onclick = function () {
        var percent = document.getElementById('percent').value

        function toPoint(percent) {
            var str = percent.replace("%", "");
            str = str / 100;
            return str;
        }
        document.getElementById('result').value = toPoint(percent).toFixed(4);
    }

}

countone()
countTwo()
