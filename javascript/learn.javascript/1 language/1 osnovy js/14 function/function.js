function showMessage(from, text) {
    text = text || 'текст не передан';
    from = '**' + from + '**'; // меняем локальную переменную from
    alert( from + ': ' + text );
}

var from = "Маша";

showMessage(from, 'grtgrth');

alert( from ); // старое значение from без изменений, в функции была изменена копия