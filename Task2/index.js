// 2.1
// Для виконання цього завдання ви повинні відкрити ігрову веб-сторінку і почекати 5 секунд. 
// Тим часом, на екрані з'являється кілька бульбашок, і вам потрібно буде підрахувати кількість бульбашок, 
// що з'явилися за час очікування, а потім ви повинні їх всі лопнути (натиснувши на бульбу). 
// Створіть expect(), щоб перевірити рахунок. 
const test = () => {
    setTimeout(() => {
        var bubblesCount = document.getElementsByClassName('bubble').length;  
        console.log(bubblesCount);   
    }, 5000)  //+stop execution of adding bubles
    var score = document.getElementsById('score'); 
    expect(score).to.equal(bubblesCount, 'it is not equal');
};
test();
// 2.2
// Написати функцію superSort (value), яка отримує рядок слів, розділений пробілами. 
// Кожне слово може складатися з латинських букв в нижньому регістрі і цифр. 
// Повертаємий результат повинен бути рядком з отриманих слів, які відсортовані в алфавітному порядку, 
// розділеними пробілами, при цьому під час сортування при порівнянні слів числа повинні ігноруватися, 
// так якщо б вони не існували. Наприклад: для рядка mic09ha1el 4b5en6 michelle be4atr3ice результатом функції 
// повинно бути наступне: be4atr3ice 4b5en6 mic09ha1el michelle

function start2(){ 
    var value = "djava4script 8hjava bp2hp abs1a eqa5 cc3pp gp7ython f6programming";

    function superSort (value){
        var sortedValue = value.replace(/\d+/g, '');
        sortedValue = sortedValue.split(' '); 
        
        sortedValue.sort();

        return sortedValue;
    }

    console.log("Task 2.2 \nGiven string is: " + value + "\nSorted string is: " + superSort(value));
}

// 2.3 
// Написати функцію, яка буде порівнювати два значення. Значення - це дати, можуть бути різного формату. 
// Головне, функція повинна перевіряти, що наші дві дати ідентичні. 
// Дати можуть відрізнятися від різних розділових знаків - «". "", "" / "" - "", 
// до різного розташування року, місяця і дня - «" yyyy.mm.dd "" dd.mm.yyyy "" mm. dd.yyyy "»

function start3(){ 
    
    // Tут можна покращити логіку, використавши розпізнавання " dd.mm.yyyy ""mm. dd.yyyy " за пробілами перед dd
    // та заміняти різні розділові знаки на щось одне і  Тоді вже порівнювати відконвертовані за одним форматом дати

    var givenDate1 = '03-12-2018'; //  mm. dd.yyyy
    var givenDate2 = '2005/04/12'; //  yyyy/mm/dd

    var date1 = new Date(givenDate1);
    var date2 = new Date(givenDate2);
   

    function convertFormatDate(date){
        var convertedDate = date.getFullYear()+ "." + ((date.getMonth()+1) < 10 ? "0"+(date.getMonth()+1) :
        (date.getMonth()+1) ) + "." + (date.getDate() < 10 ? "0"+date.getDate() :
        date.getDate());
        return convertedDate;
    }

    function compareDates(convertedDate1, convertedDate2){
        console.log('Task 2.3 \nGiven dates are: ' + givenDate1 + ' and ' + givenDate2 + '\nConverted Dates in yyyy.mm.dd are: ' + convertFormatDate(date1) + ' and ' + convertFormatDate(date2));
        
        if(convertedDate1 === convertedDate2){
            console.log('Dates are the same');
        }else{
            console.log('Dates are NOT the same');
        }
    }

    compareDates(convertFormatDate(date1), convertFormatDate(date2));
}
// 2.4
// Є масив з безліччю чисел. Всі числа однакові, крім одного. 
// Спробуйте знайти це число! Наприклад, 1, 1, 1, 2, 1, 1 => 2, 0, 0, 0,55, 0, 0 => 0,55. 
// Гарантується, що масив містить більше 3 чисел. 
// Тестові дані можуть містити дуже великі масиви, тому подумайте про перформанс.

function start4(){
    let arr1 = [1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 1];
    let arr2 = [0, 0, 0, 0, -1, 0, 0 , 0, 0, 0];

    function findNumber(arr){
        this.arr = arr;
        console.log('Task 2.4 \nGiven array is ' + arr);
        arr.sort();

        if(arr[0] == arr[1]){
            console.log("Unique element is " + arr[arr.length-1]);
        }else{
            console.log("Unique element is " + arr[0]);
        }
    }

    findNumber(arr1);
    findNumber(arr2);
} 

// 2.5
// Використовуючи if..else або умовний (тернарний) оператор напишіть функцію getDiscount.
// Функція приймає 1 параметр: number, number - кількість одиниць товару, який купує клієнт. 
// При покупці менше 5 одиниць, клієнт не отримує знижку і повинен буде заплатити 100 відсотків вартості товару. 
// Якщо покупок 5, але не більше 10 (<10), тоді клієнт заплатить тільки 95 відсотків від вартості товару. 
// Якщо покупок 10 або більше (>=10) - 90%. Функція повинна повертати вартість товару.

function start5(){
    var cost = 100;
    var number = 6;

    function getDiscount(number){
        var discount = (number < 5) ? 1 :
                       (number >= 5 && number < 10) ? 0.95 : 0.9 ;

        return cost*discount;
    }

    console.log("Task 2.5 \nNumber of goods = " + number + "\nCost of 1 without discount = " + cost+ "\nCost of 1 with discount = " + getDiscount(number));
    console.log("Total cost sum = " + number*getDiscount(number));
}

// 2.6
// Використовуючи switch statement напишіть функцію getDaysForMonth, яка приймає 1 параметр: 
// month - означає місяць року (місяць завжди більше 0, менше або дорівнює 12). 
// І повертає кількість днів у місяці (e.g. 1 поверне 31). Високосний рік враховувати не варто.

function  start6(){
    
    var month = Math.floor(Math.random() * 12) + 1  ;

    function getDaysForMonth(month){
        var NumersOfDays; 
        
        switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            NumersOfDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            NumersOfDays = 30;
            break;
        case 2:
            NumersOfDays = 28;
            break;
        default:
            console.log(`Sorry, such a month as ${month} does not exist.`);
        }

        return NumersOfDays;
    }

    console.log("Task 2.6 \nNumber of days in " + month + " month is "+ getDaysForMonth(month));
}
