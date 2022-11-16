let a = 2;

//out 2^32


// for(let x = 0 ;x<=10 ; x++ ){
//     console.log(a,x);
// }

// let x = 0;
// // do{
// //     console.log(a,x);
// //     x+=5;
// // }
// // while(x<=10)

// while(x<=10){
//     console.log(a,x);
//     x+=5;     
// }


// for(let x = 1 ;x<=32 ; x++ ){
//          a *=2;
// }
// console.log(a);


// let pages = [
//     "Main",
//     "About",
//     "Contacts"
// ]

// document.write("<ul>");
// for(let i=0;i<pages.length;i++){
//     document.write(`
//         <li>${pages[i]}</li>
//     `)
// }
// document.write("</ul>");
// console.log(pages[2])

// for (z of pages){
//     console.log(z);
// }

 let out="<table>";


for(let x = 1 ;x<=10 ; x++ ){
          out+=`<tr>`;
            for(let y = 1 ;y<=10 ; y++ ){
                if(y/6==1){
                    // continue;
                    //break;
                }
                out+=`<td>${x*y}</td>`;
            }
          out+=`</tr>`;
}
out+="</table>";
document.write(out);


function hello(name){
    document.write("Hello " + name + "!");
}

function sum(num1,num2){
    //document.write(num1+num2);
    //return num1+num2
    hello("Victor");
    return [num1,num2];
    //return


}

//calc1("Vitaly");
// sum(10,34);
// document.write(sum(40,60));

// let year = 13;
// let day = "wednesday";
// if(year==18 || day=="wednesday"){
//     console.log(true);//true
// }else if(year==15){
//     console.log(false);//false
// }else{

// }

//< > == != === <= >= <> 

//&& || 


// Calc
//Actions :"/" "*";


function calculator(num1,num2,action){
    if(action=="*"){
        return num1*num2
    }else if(action=="/" && num2!=0){
        return num1/num2
    }else{
        return false
    }
}


//console.log(calculator(3,0,"/"));

//let ans1 = +prompt("Введите первое значение");//string
//let ans2 = +prompt("Введите второе значение");

//alert("Error");

//let ans3 = confirm("Вы готовы к уроку???");

// if(ans3){
//     alert("Lets start");
// }


function check(data){
    // number
    // console.log(new Number(data).isInteger)

    //console.log(Number.isInteger(data));
    //console.log(data.toFixed(2));
    //console.log(parseInt(data)); //Строка->Число
    //Math
    // console.log(Math.floor(data));
    // console.log(Math.ceil(data));
    // console.log(Math.abs(data));
    //console.log(Math.trunc(Math.random()*10));
    //String
    console.log(data.length);
    console.log(data[3]);
    console.log(data.toLowerCase());
    console.log(data.toUpperCase());
    console.log(data.split(" "));
    console.log(data.concat("Другая строка"));
    console.log(data.concat("Другая строка"));
    console.log(data.substring(3,0)); //substr
    console.log(data.trim()); 



}

check("     Привет Мир!!!      ");


//Улучшить калькуляторы чтобы можно было вводить данные
//С помощью циклов сделать таблицу картинок вывода картинок на страницу
//Калькулятор в который можно вводить данные
//let ans1 = +prompt("Введите первое значение");//string
//let ans2 = +prompt("Введите второе значение");

// images = [
//     img1
// ]