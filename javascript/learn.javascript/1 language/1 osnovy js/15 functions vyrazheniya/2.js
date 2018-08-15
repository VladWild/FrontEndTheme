function ask(question, yes, no) {
    if (false) yes()
    else no();
}

function showOk() {
    console.log( "Вы согласились." );
}

function showCancel() {
    console.log( "Вы отменили выполнение." );
}

// использование
ask("Вы согласны?", showOk, showCancel);