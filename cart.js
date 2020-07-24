// use querySelectorAll to select all essential Button and text input
var plusBtn = document.querySelectorAll('.plusBtn');
var quantityText = document.querySelectorAll('.quantityText');
var minusBtn = document.querySelectorAll('.minusBtn');
var spanText = document.querySelectorAll('.spanText');

// call totalCount
totalCount();



// plusbtn eventListener
for (let i = 0; i < plusBtn.length; i++) {
    const button = plusBtn[i];
    button.addEventListener('click', function () {
        if (quantityText[i].value == "" || quantityText[i].value == NaN) {
            quantityText[i].value = "0";
        }
        var quantityNum = parseInt(quantityText[i].value);
        quantityText[i].value = ++quantityNum;
        //var price = parseInt(spanText[i].innerText);
        var price = [1219, 59];
        var totalPrice = (quantityNum * price[i]);
        spanText[i].innerText = totalPrice;
        totalCount();
    })
}

//minusBtn eventListener
for (let i = 0; i < minusBtn.length; i++) {
    const button = minusBtn[i];
    button.addEventListener('click', function () {
        var quantityNum = parseInt(quantityText[i].value);
        if (quantityNum < 1) {
            quantityNum = 1;
        }
        quantityText[i].value = --quantityNum;
        var price = [1219, 59];
        var totalPrice = (quantityNum * price[i]);
        spanText[i].innerText = totalPrice;
        totalCount();
    })
}



// calculating total 
function totalCount() {
    var subTotal = parseInt(spanText[0].innerText) + parseInt(spanText[1].innerText);
    document.getElementById('subTotalSpan').innerText = subTotal;
    var tax = subTotal * .05;
    document.getElementById('taxSpan').innerText = tax.toFixed(2);
    var inTotal = subTotal + tax;
    document.getElementById('totalSpan').innerText = inTotal.toFixed(2);
}


// checkout function


// item-remove function
var removeItem = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeItem.length; i++) {
    var element = removeItem[i];
    element.addEventListener('click', function (event) {
        var elementClicked = event.target;
        elementClicked.parentElement.parentElement.parentElement.remove();
        if(subTotal == null){
            document.getElementById('subTotalSpan').innerText = "0"
            document.getElementById('taxSpan').innerText = "0"
            document.getElementById('totalSpan').innerText = "0"
        }
        var subTotal = parseInt(document.getElementById('subTotalSpan').innerText);
        var remainItemPrice = parseInt(document.querySelector('.spanText').innerText);
        var newSubTotal = remainItemPrice;
        document.getElementById('subTotalSpan').innerText = newSubTotal;
        var tax = newSubTotal * .05;
        document.getElementById('taxSpan').innerText = tax.toFixed(2);
        var inTotal = newSubTotal + tax;
        document.getElementById('totalSpan').innerText = inTotal.toFixed(2);
    })
}