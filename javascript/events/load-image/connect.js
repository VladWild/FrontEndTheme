buttonID.onclick = function () {
    var x = document.createElement('image');
    x = document.createElement('IMG');
    x.setAttribute('id', 'Queen_of_Hearts');
    x.setAttribute('src', 'image/CakesAndBakes.jpg');
    x.setAttribute('width', '72');
    x.setAttribute('alt', 'Card Face');
    x.setAttribute('onclick', 'alert("You picked the Queen of Hearts!")');
    document.getElementById('card_holder').appendChild(x);
    console.log("Кнопка нажата");
};