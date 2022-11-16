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