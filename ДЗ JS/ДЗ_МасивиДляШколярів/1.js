/* Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії
він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і
відмінно), трійочник(є хоча би одна трійка)). */

// масив оцінок
let arr = [];

let i = 1;

// Сума оцінок
let sum = 0;

// Кількість оцінок
let num = 0;

function addArrey() {
    let output = document.getElementById("output");
    let number = parseInt(document.getElementById("number").value);
    let rating = parseInt(document.getElementById("rating").value);
    num = number;
    if (2<= rating && rating <= 5 && i < number) 
    {
        arr.push(rating);
        sum += rating;
        output.innerText = `Введіть ще ${number-i} оцінок!`;
        i += 1;

        // output.innerText = `Сума оцінок = ${sum}`;
    }
    else if (i == number){
        arr.push(rating);
        sum += rating;
        output.innerText = `Виконайте наступні дії`;
        i += 1;
    }
    else {
        output.innerText = `Виконайте наступні дії`;
    }
    document.getElementById("rating").value = "";
}

function averageMark() {
    let output = document.getElementById("output");
    let average = sum / num;
    output.innerText = `Середній бал = ${average}`;
}

function findcategory() {
    let output = document.getElementById("output");
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    for (let k = 0; k < arr.length; k++) {
       if (arr[k] == 2){
            two += 1;
       }
       else if (arr[k] == 3)
       {
            three += 1;
       }
       else if (arr[k] == 4)
       {
            four += 1;
       }
       else if (arr[k] == 5)
       {
            five += 1;
       }
    }

    if (two > 0) {
        output.innerText = `Двійочник`;
    }
    else {
        if (three > 0) {
            output.innerText = `Трійочник`;
        }
        else {
            if (four > 0) {
                output.innerText = `Хорошист`;
            }
            else {
                output.innerText = `Відмінник`;
            }
        }
    }
}

function clearall() {
    document.getElementById("number").value = "";
    document.getElementById("rating").value = "";
    output.innerText = "";
    arr.clearall;
    i = 1;
    sum = 0;
    num = 0;
}        
