const UserName2 = "Nata";

function sayHello(UserName2) {
    if (UserName2 === undefined) {
        return ("Привет гость!")
    } else {
        return ("Привет" + ' ' + UserName2);
    }
}
console.log(sayHello(UserName2));

const firstParam = 4;
const secondParam = 2;

function getExponent(firstParam2, secondParam2) {
    return(firstParam2 ** secondParam2);
}
console.log(getExponent(firstParam, secondParam));

//Выводим строку т раз//
function stroka(stroka, n=1){
    for(let i = 1; i <= n; i++){
        console.log(stroka);
    }
    return;
}
stroka('fgrgrg', 5);

//вывести Имя с большой буквы//
let name3 = 'вася'
name3 = name3.charAt(0).toUpperCase() + name3.slice(1);
console.log(name3)

//вывести Имя с большой буквы в функции//
const string = 'aaaaaaaa'

function printString (params) {
   firstLet = params[0].toUpperCase();
   return firstLet + string.slice(1)}
/* params - можно так указывать [0] - индекс параметра, то есть по сути первый элемент слова,
 string.slice(1) -имя от первого симвода даллее */
console.log(printString(string))