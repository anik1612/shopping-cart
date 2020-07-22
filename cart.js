const price = document.getElementById('spanText').innerText;
const priceNum = parseInt(price);

const itemAdd = document.getElementById('addBtn');
itemAdd.addEventListener('click', function () {
    let itemCount = document.getElementById('addItemText').value;
    let count = parseInt(itemCount);
    document.getElementById('addItemText').value = ++count;
    let inTotal = count * priceNum;
    document.getElementById('spanText').innerText = inTotal;
})

const itemMinus = document.getElementById('minusBtn')
itemMinus.addEventListener('click', function () {
    let itemCount = document.getElementById('addItemText').value;
    let count = parseInt(itemCount);
    if (count > 0) {
        document.getElementById('addItemText').value = --count;
        let inTotal = count * priceNum;
        document.getElementById('spanText').innerText = inTotal;
    }

})


var removeItem = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeItem.length; i++) {
    var element = removeItem[i];
    element.addEventListener('click', function (event) {
        var elementClicked = event.target
        elementClicked.parentElement.parentElement.parentElement.remove();
    })
}