var arrNumeral = ['One', 'Two', 'Free', 'Fore', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

var input = "wo";

var arr2 = arrNumeral.filter(function (numeric) {
    return numeric.indexOf(input) > -1;
});

console.log(arr2);