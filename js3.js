// Поиск элементов на странице
//Old
let text1 = document.getElementById('text1');
let div = document.getElementsByClassName('container'); //возвращает всегда коллекцию 
let h2 = document.getElementsByTagName('h2'); //возвращает всегда коллекцию
let input1 = document.getElementsByName('username'); //возвращает всегда коллекцию

//new работает с CSS селекторами
let button1 = document.querySelector('#btn1');
let div2 = document.querySelector('.container'); //Если элементов несколько, возвращает только первый

let headings = document.querySelectorAll("h1,h2"); //возвращает всегда коллекци

//CSS selectors
// .container 

// input[type=""]


console.log(headings);



//Вывод информации  определенные элементы на странице
 div2 = document.querySelectorAll('.container');

 //innerHTML

 div2[1].innerHTML += "<h1>Hello Everybody</h1>";
 text1.innerText = "Новый заголовок!!!";

 input1[0].style.border = "2px solid red";
 div2[0].style.backgroundColor = "blue";
 div2[0].style.color = "white";

 //Подключение или отключение классов к элементам
document.body.classList.add('body1'); //добавление класса к элементам
div2[1].classList.remove('active');
div2[1].classList.remove('used');

if(div2[1].classList.contains('used')){
    alert("")
}
