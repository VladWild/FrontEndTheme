buttonID.onclick = function () {
    var div = document.createElement('div');
    div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";
    buttonID.parentNode.appendChild(div);
    console.log("Кнопка нажата");
};