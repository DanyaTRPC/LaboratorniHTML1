function printNM(){
    let n = parseInt(document.getElementById("n").value);
    let m = parseInt(document.getElementById("m").value);
    let count = parseInt(document.getElementById("count").value);
    let res = document.getElementById("result");
    do{
        n+=count;
        m-=count;
        document.write(`${n}---${m}`);
        count-=1;
        document.write('<br/>');
    }while(count>=0)
    
}