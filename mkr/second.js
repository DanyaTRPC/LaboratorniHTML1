function foundNice(){
    let res1 = document.getElementById("result1");
    let res2 = document.getElementById("result2");
    let res3 = document.getElementById("result3");
    let res4 = document.getElementById("result4");
    let res5 = document.getElementById("result5");
    let fr = document.getElementById("first").value;
    let tw = document.getElementById("second").value;
    let th = document.getElementById("third").value;
    let fo = document.getElementById("four").value;
    let fi = document.getElementById("five").value;
    if(10<=fr&&fr<=12){
        res1.innerText = "1. Відмінно"  
    }
    else{
        res1.innerText = "1. Не відмінно"
    }
    if(10<=tw&&tw<=12){
        res2.innerText = "2. Відмінно"  
    }
    else{
        res2.innerText = "2. Не відмінно"
    }
    if(10<=th&&th<=12){
        res3.innerText = "3. Відмінно"    
    }
    else{
        res3.innerText = "3. Не відмінно"
    }
    if(10<=fo&&fo<=12){
        res4.innerText = "4. Відмінно" 
    }
    else{
        res4.innerText = "4. Не відмінно"
    }
    if(10<=fi&&fi<=12){
        res5.innerText = "5. Відмінно"  
    }
    else{
        res5.innerText = "5. Не відмінно"
    }
}