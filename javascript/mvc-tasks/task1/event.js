function typingText() {
    console.log(this.value);
    removeAllNumeric();
    addAllNumeric();
    if (!this.value) return;

    var elements = document.getElementsByClassName("numeral");
    for (let i = 0; i < elements.length; i++){
        console.log(elements);
        console.log(elements[i]);
        console.log(this.value + " - " + elements[i].textContent);
        console.log(this.value.indexOf(elements[i].textContent));
        if (this.value.indexOf(elements[i].textContent) === -1) {
            elements[i].remove();
        }
    }
}

var page = document.getElementById('page'); console.log(page);
var arrNumeral = ['One', 'Two', 'Free', 'Fore', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
addAllNumeric();

let searcher = document.getElementById("searcher");
searcher.onkeyup = typingText;

function addAllNumeric(){
    for (let i = 0; i < arrNumeral.length; i++){
        let div = document.createElement('div');
        div.innerHTML = arrNumeral[i];
        div.className = "numeral";
        page.appendChild(div);
    }
}

function removeAllNumeric(){
    let elements = document.getElementsByClassName("numeral");
    while (document.getElementsByClassName("numeral").length !== 0) {
        page.removeChild(elements[0]);
    }
}

/*let value = searcher.value;
console.log(value);*/

/*var elements = document.getElementsByTagName('div');
console.log(elements);

console.log(value);*/

