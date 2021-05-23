function validate(){
    let Name= document.getElementsByName("Name")[0].value;
    if (!isNameValid(Name)){
        document.getElementsByClassName("error")[0].innerText = "Не формат перша буква велика";
    } else{
        document.getElementsByClassName("error")[0].innerText = "";
    }

    let carNumb = document.getElementsByName("carNumb")[0].value;
    if (!isCarNumbValid(carNumb)){
        document.getElementsByClassName("error")[1].innerText = "Не формат ЛЛ ЦЦЦЦ ЛЛ";
    } else{
        document.getElementsByClassName("error")[1].innerText = "";
    }
    let marc = document.getElementsByName("marc")[0].value;
    if (!isMarcValid(marc)){
        document.getElementsByClassName("error")[2].innerText = "Не формат марка маленькими буквами";
    } else{
        document.getElementsByClassName("error")[2].innerText = "";
    }
    let price = document.getElementsByName("price")[0].value;
    if (!isPriceValid(price)){
        document.getElementsByClassName("error")[3].innerText = "Не формат додатні числа";
    } else{
        document.getElementsByClassName("error")[3].innerText = "";
    }
    let mail = document.getElementsByName("mail")[0].value;
    if (!isMailValid(mail)){
        document.getElementsByClassName("error")[4].innerText = "Не формат Область, район, населений пункт, адреса";
    } else{
        document.getElementsByClassName("error")[4].innerText = "";
    }
}

function isNameValid(Name){
    return /^[А-я]{1}[а-я]\.$/.test(Name);
}
function  isCarNumbValid(carNumb){
    return /^[A-Z]+\d\d\d\d\+[A-Z]\.$/.test(carNumb);
}
function isMarcValid(marc){
    return /^[a-z]\.$/.test(marc);
}
function isPriceValid(price){
    return /^\d*100\.$/.test(price);
}
function isMailValid(mail){
    return /^\w,\w,\w,\w\.$/.test(mail);
}