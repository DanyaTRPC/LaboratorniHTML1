function findSum(numbers){
    let res = document.getElementById('result');
    var str = String(numbers);
    var sum = 0;

    for (var i = 0; i < str.length; i++ ){
        if(i%2==0){
            sum += parseInt(str.charAt(i), 10);
        }
    }
    res.innerText = `Сума: ${sum}`;
};