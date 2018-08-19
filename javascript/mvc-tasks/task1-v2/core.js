function typingText() {
    removeAllNumeric();

    var str = this.value;
    var arr2 = arrNumeral.filter(
        numeric => numeric.indexOf(str) > -1);
    var arr4 = arr2.map(function (numeric) {
        return numeric.replace(str, "<span>" + str + "</span>");
    });

    console.log(arr4);

    addAllNumeric(arr4);
}

var page = document.getElementById('page');
var list = document.getElementById('list');
var arrNumeral = ['One', 'Two', 'Free', 'Fore', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

var searcher = document.getElementById("searcher");
searcher.addEventListener('onkeyup', typingText);

addAllNumeric(arrNumeral);

function addAllNumeric(arrNumeral){
    for (let i = 0; i < arrNumeral.length; i++){
        let li = document.createElement('li');
        li.innerHTML = arrNumeral[i];
        li.className = "numeral";
        list.appendChild(li);
    }
}

function removeAllNumeric() {
    var numerals = document.getElementsByClassName("numeral");
    while (numerals[0]){
        numerals[0].remove();
    }
}

