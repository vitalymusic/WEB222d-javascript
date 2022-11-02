//console.log("ok");
// вывод в консоль разработчика
//CONSOLE.log("not ok");
// Отличаются большие и маленькие буквы
// {
//     console.log("ok");
//     console.log("ok");
//     console.log("ok"); 
// }
// фигурные скобки это блок кода

// Типы данных - простые
let number1, firstNumber, secondNumber;

number1 = 10; //Integer (int)
firstNumber = 10.25;//Float (Double)
let text1 = `сегодня прекрасный день`;//String 
let text2 = "сегодня прекрасный день";//String 
let status1 = true; 
let status2 = false; 


let arr1 = ["Audi",2.5,true]; //Array



//console.log(text1,obj1,arr1) //Вывод данных в консоль
// document.write(number1,obj1.username,obj1.email,obj1.role);
// document.write(status1,status2);
// document.write("<h1>Hello world</h1>");

//Конкатенация текста
let message = "Hello Everyone";

//document.write("<h1>" + message + "\n" + number1+ "</h1>");

number2 = 20;
//document.write(number1 + number2);
// * / + -  % ++, -- Работает именно с цифрами int,float
// number2--;
// number2--;
// number2++;
// number2++;

number2+=5;
number2-=5;
number2*=5;
number2/=5;
//Изменение содержимого переменной



// document.write(number2);
let obj1 = {
    username:"Janis",
    email:"janis@google.com",
    role:"admin",
    img:""
    //object
}

let htmlOut = `
    <div class="card">
        <h3>${obj1.username}</h3>
        <p>${obj1.email}</p>
        <img src="${obj1.img}">
    </div>
`;
document.write(htmlOut);


//новый Js файл


// узнать сколько месяцев в 7 годах

// Посчитайте кредит (5000евро) который берут на 5 лет, какая переплата если за год 15%

//console.log(12*7);


let credit = {
    creditSum:5000,
    years:5,
    creditPercentYear:15
}
let creditPay = credit.years*credit.creditPercentYear*credit.creditSum/100;
let FullCredit = credit.creditSum+creditPay;

let answer  = {
    FullCredit:FullCredit,
    monthPay:FullCredit/(credit.years*12)
}

let out = `Общая сумма кредита: ${answer.FullCredit}, месячный платеж:  ${answer.monthPay.toFixed(2)}`;
document.write(out);
//let test = 4;

// let test = 5;


//2 расчета на разную тематику
