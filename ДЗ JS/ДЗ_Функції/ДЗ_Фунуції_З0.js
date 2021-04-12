function seasonFind(){
    let m = parseInt(document.getElementById("month").value);
    let res = document.getElementById("result");
    if(3<=m && m<=5 ){
        res.innerText = `Весна`;
    }
    else if(6<=m && m<=8){
        res.innerText = `Літо`;
    }
    else if(9<=m && m<=11){
        res.innerText = `Осінь`;
    }
    else if(m<=2 && m<=1){
        res.innerText = `Зима`;
    }
    else if(m==12){
        res.innerText = `Зима`;
    }
    else{
        res.innerText = `Не існує такого місяця`;
    }
}