/* 1. Вывести сумму чисел от 1 до N */
let N1 = 11;
function getSumFromNullToN (N) {
    let sumN = 0;
    for (let i = 1; i < N; i++){
        sumN = sumN + i;
        }
        return sumN;
    }
console.log(getSumFromNullToN(N1));

/* 2. Вывести факториал числа N*/
let N2 = 12;
function getFactorialOfN (N) {
    let factorial = 1;
    for (let i = 1; i <= N; i++){
        factorial = factorial * i;
        }
    return factorial;
}
console.log(getFactorialOfN(N2));

/*3. Вывести четные и нечетные числа от 1 до 100*/
let N3 = 14;
function getStringofNumbers (N) {
    let evenString = 'Четные: ';
    let unEvenString = 'Нечетные: ';
    for (let i = 1; i < N; i++) {
        if (i % 2 == 0) {
            evenString = evenString + i + '; ';
            } else {
            unEvenString = unEvenString + i + '; ';
            }
    }
      return (
            unEvenString + evenString
        )
}
    console.log(getStringofNumbers(N3));

/*4. Вывести проверку на простое число*/
/* Простое число: больше 1, два делителя - 1 и само число, значит надо 
1) проверить N>1 
2) делится ли число на i от 2 до N-1 без остатка */

let N4 = 13;
function checkSimpleNum (N){
    let result = "";
    if (N > 1) {
        for (let i = 2; i < N; i++) {
            if (N % i == 0) {
                result = "Не является простым числом"; //Если делится на какое-то число без остатка, не является простым - прерываем
                break;
                } else { 
                    result = "Простое число";
                }
            }
         return result;
}
}
    console.log( checkSimpleNum(N4));
    
/*5. Вывести таблицу умножения для числа N*/
let N5 = 10;
function getMultipleTable (N) {
    let result = 0;
    for (let i = 1; i <= N; i++) {
        result = N * i;
        console.log(N + "*" + i + "=" + result);
    } 
    return ('Пам-пам-пам, ВСЕ!!!') /* Так и не поняла, как сделать по-другому. Если впихивать (N...result) в return, выводит только последний расчет*/
}
console.log(getMultipleTable(N5));

/*6. Вывести сумму цифр числа N*/
let N6 = 4587;
function getSumOfNumForN (N) {
    let sumOfDigits = 0;
    let lastDigit = 0;
while (N >= 1) {
    lastDigit = N % 10; //вычисляем цифру в последнем разряде числа
    N = (N-lastDigit)/10; //убираем вычисленную цифру, дабы на конце был 0 и то не повлияло на расчет следующего, и отбрасываем разряд, для которого цифра получена
    sumOfDigits = sumOfDigits + lastDigit;
}
return sumOfDigits
}
console.log(getSumOfNumForN(N6));

/*7. Обратное число*/
let N7 = 56;
function getReverseNum (N) {
    let reversNumber = '';
    let lastDigit = 0;
while (N >= 1) {
    lastDigit = N % 10; //вычисляем цифру в последнем разряде числа
    N = (N-lastDigit)/10; //убираем вычисленную цифру, дабы на конце был 0 и то не повлияло на расчет следующего, и отбрасываем разряд, для которого цифра получена
    reversNumber = reversNumber + lastDigit; //собираем обратное число с конца исходного
}
return reversNumber
}
console.log(getReverseNum(N7));

/*8. Количество цифр в числе N*/
let N8 = 145;
function getAmountOfNumbersInN (N){
    let amountOfDigits = 0;
    let lastDigit = 0;
while (N >= 1) {
    lastDigit = N % 10;
    N = (N-lastDigit)/10;
    amountOfDigits++;
    }
return amountOfDigits
}
console.log(getAmountOfNumbersInN(N8));

/*9. Проверка палиндрома для числа N*/
let N9 = 3553;
function checkIfPalindrom (N){
    let reversNumber = 0;
    let lastDigit = 0;
    let result = '';
    for (let Nn = N; Nn >= 1;) { //вводим новую переменную, чтобы к концу цикла N было неизменным
    lastDigit = Nn % 10; //вычисляем цифру в последнем разряде
    Nn = (Nn - lastDigit)/10; 
    reversNumber = (reversNumber*10) + lastDigit; // *10 так как мы перешли к следующему разряду при вычислении следующей цифры
    }
    if (N === reversNumber) {
         result = "Палиндром";
    } else {
        result = "Не палиндром";
    }
    return result
}
console.log(checkIfPalindrom(N9));

/*10. Сумма квадратов чисел от 1 до N*/
let N10 = 34;
function getSumOfSquare (N) {
    let sumOfSquare = 0;
    let square = 0;
    for (let i = 0; i <= N; i++){
        square = (i ** 2);
        sumOfSquare = sumOfSquare + square;
    }
    return sumOfSquare
 }
console.log(getSumOfSquare(N10));