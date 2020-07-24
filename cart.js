// plusBtn 
var plusBtn = document.querySelectorAll('.plusBtn');
var quantityText = document.querySelectorAll('.quantityText');

// minusBtn
var minusBtn = document.querySelectorAll('.minusBtn');

//spanText 
var spanText = document.querySelectorAll('.spanText');


// plusbtn eventListener
for (let i = 0; i < plusBtn.length; i++) {
    const button = plusBtn[i];
    button.addEventListener('click', function () {
        if(quantityText[i].value == "" || quantityText[i].value == NaN){
            quantityText[i].value = "0"; 
        }
        var quantityNum = parseInt(quantityText[i].value);
        quantityText[i].value = ++quantityNum;
        //var price = parseInt(spanText[i].innerText);
        var price = [1219, 59];
        var totalPrice = (quantityNum * price[i]);
        spanText[i].innerText = totalPrice;
        subTotal = parseInt(spanText[0].innerText) + parseInt(spanText[1].innerText);
        document.getElementById('subTotalSpan').innerText = subTotal;
    })
}

//minusBtn eventListener
for (let i = 0; i < minusBtn.length; i++) {
    const button1 = minusBtn[i];
    button1.addEventListener('click', function () {
        var quantityNum = parseInt(document.querySelectorAll('.quantityText')[i].value);
        if(quantityNum <1){
            quantityNum = 1;
        }
        quantityText[i].value = --quantityNum;
        var price = [1219, 59];
        var totalPrice = (quantityNum * price[i]);
        spanText[i].innerText = totalPrice;
        subTotal = parseInt(spanText[0].innerText) + parseInt(spanText[1].innerText);
        document.getElementById('subTotalSpan').innerText = subTotal;
    })
}

// item-remove function
var removeItem = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeItem.length; i++) {
    var element = removeItem[i];
    element.addEventListener('click', function (event) {
        var elementClicked = event.target
        elementClicked.parentElement.parentElement.parentElement.remove();
    })
}