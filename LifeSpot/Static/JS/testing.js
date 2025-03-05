//let userName = prompt("Введите ваше имя");
//alert(`Добро пожаловать ${userName}. В вашем имени ${userName.length} символов`);

let elements = document.getElementsByTagName('*');
alert(`Количество элементов на странице:  ${elements.length}`);

const saveInput = function () {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    alert('Последний ввод: ' + CheckLastInput(this.lastInput) + '\n' + 'Текущий ввод: ' + currentInput);

    this.lastInput = currentInput;
}

function CheckLastInput(data) {
    if (typeof (data) == "undefined") return "Пусто";
    else return data;
}