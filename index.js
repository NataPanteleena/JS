/* 1. Вывести сумму чисел от 1 до N */
let N = 10;
let SummaN = 0;
for (let i = 1; i < N; i++){
    SummaN = SummaN + i;
}
console.log(SummaN);

/* 2. Вывести факториал числа N*/
let N2 = 10;
let FactorialofNumber = 1;
for (let i2 = 1; i2 <= N2; i2++){
    FactorialofNumber = FactorialofNumber * i2;
}
console.log(FactorialofNumber);

/*3. Вывести четные и нечетные числа от 1 до 100*/
let N3 = 100;
let EvenString = '';
let UnevenString = '';
for (let i3 = 1; i3 <= N3; i3 ++){
    if (i3 % 2 == 0) {
        EvenString = EvenString + ", " + i3; 
    }
    else {
        UnevenString = UnevenString + ", " + i3;
    }
}
    console.log("Нечетные" + UnevenString);
    console.log("Четные" + EvenString);
    
/*4. Вывести проверку на простое число --- не получается*/
let N4 = 11;
for (let i4 = 2; i4 <= N4; i4++) {
    if (N4 % i4 !== 0) {
            if (N4 == i4) {
                console.log("Простое число")
                }   
            } 
    }

/*5. Вывести таблицу умножения для числа N*/
let N5 = 10;
let i5 = 1;
let result = 0;
while (i5 <= N5) {
        result = N5 * i5;
        console.log(N5 + "*" + i5 + "=" + result);
        i5 ++;
}
/*6. Вывести сумму цифр числа N*/
let N6 = 35;
let SumOfDigits = 0;
let LastDigit = 0;
while (N6 > 0) {
    LastDigit = N6 % 10;
    N6 = (N6-LastDigit)/10;
    SumOfDigits = SumOfDigits + LastDigit;
}
SumOfDigits = SumOfDigits + N6;
console.log(SumOfDigits);

/*7. Обратное число*/
let N7 = 56;
let ReversNumber = 0;
ReversNumber = 1/N7;
console.log(ReversNumber);

/*8. Количество цифр в числе N*/
let N8 = 145;
let AmountOfDigits = 0;
let LastPosition = 0;
while (N8 > 0) {
    LastPosition = N8 % 10;
    N8 = (N8-LastPosition)/10;
    AmountOfDigits++;
}
console.log(AmountOfDigits);

/*9. Проверка палиндрома для числа N*/
let N9 = 356;
let ReversToNumber = 0;
let LastOfDigit = 0;
while (N9 > 0) {
    LastOfDigit = N9 % 10;
    N9 = (N9-LastOfDigit)/10;
    ReversToNumber = (ReversNumber*10) + LastOfDigit;
}
if (N9 === ReversToNumber) {
console.log("Палиндром");
} else {
    console.log("Увы! не палиндром");
}

/*10. Сумма квадратов чисел от 1 до N*/
let N10 = 34;
let SumOfSquare = 0;
let Square = 0;
for (let i10 = 0; i10 <= N10; i10++){
    Square = (i10 ** 2);
    SumOfSquare = SumOfSquare + Square;
}
console.log(SumOfSquare);

