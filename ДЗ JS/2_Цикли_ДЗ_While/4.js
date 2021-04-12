function findSum(numbs){
    let res = document.getElementById('result');
    var str = String(numbs);
    var a = str.length;
    var sum = 0;
    var k = 0;
    while(a > 0){
        k++;
        sum += str/k;
    }
    res.innerText = `Середнє арифметичне: ${sum}`;
}