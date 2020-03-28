//получаем со страницы поле ввода цвета
var colorField = document.querySelector('.color-field');
//получаем со страницы кнопку-применить
var applyBtn = document.querySelector('.apply');
//получаем со страницы блок который красим
var resultElement = document.querySelector('.result');

//нажимаем на кнопку применить-добавляем функционал
applyBtn.addEventListener('click', function () {
  //получаем значение поля цвета
  var color = colorField.value;
  //ставим условие на существование цвета
  if (color) {
    //меняем цвет фона
    resultElement.style.backgroundColor = color;
    //если цвета нет
  } else {
    //выводим сообщение браузера
    alert('идиотина добавь цвет,');
  }
});
