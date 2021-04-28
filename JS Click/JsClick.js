function change(){
    let a = document.getElementById("aStyleAfter");
    a.id =  "aStyle";
    document.getElementById("question").innerHTML="Choose description content";
    document.getElementById("button1").remove();
    var ZNode       = document.createElement ('p');
    ZNode.innerHTML = '<input id="myButton1" type="button" value="Back" onclick="Back()">';
    ZNode.setAttribute ('id', 'action1');
    document.body.appendChild (ZNode);
    let zNode       = document.createElement ('p');
    zNode.innerHTML = '<input id="myButton2" type="button" value="Submit description" onclick="areUhappy()">';
    zNode.setAttribute ('id', 'action2');
    document.body.appendChild (zNode);
    
}
function areUhappy(){
    let b = document.getElementById("aStyleAfter1");
    b.id = ("aStyle");
    document.getElementById("question").innerHTML="Are you happy now?"
    document.getElementById("myButton1").remove();
    document.getElementById("myButton2").remove();
    var ZNode       = document.createElement ('p');
    ZNode.innerHTML = '<input id="myButton3" type="button" value="No, go back" onclick="noGoBack()">';
    ZNode.setAttribute ('id', 'action3');
    document.body.appendChild (ZNode);
    let zNode       = document.createElement ('p');
    zNode.innerHTML = '<input id="myButton4" type="button" value="Yes, go ahead" onclick="yes()">';
    zNode.setAttribute ('id', 'action4');
    document.body.appendChild (zNode);
}
function Back(a){
    let c = document.getElementById("aStyleAfter");
    c.id = "aStyleAfter0";
    document.getElementById("question").innerHTML = "Choose title content";
    document.getElementById("myButton1").remove();
    document.getElementById("myButton2").remove();
    let zNode       = document.createElement ('p');
    zNode.innerHTML = '<input id="button1" type="button" value="Submit title" onclick="change()">'
    zNode.setAttribute ('id', 'button2');
    document.body.appendChild (zNode);
}
function noGoBack(){
    document.getElementById("question").innerHTML = "Choose description content";
    document.getElementById("myButton3").remove();
    document.getElementById("myButton4").remove();
    var ZNode       = document.createElement ('p');
    ZNode.innerHTML = '<input id="myButton1" type="button" value="Back" onclick="Back()">';
    ZNode.setAttribute ('id', 'action1');
    document.body.appendChild (ZNode);
    let zNode       = document.createElement ('p');
    zNode.innerHTML = '<input id="myButton2" type="button" value="Submit description" onclick="areUhappy()">';
    zNode.setAttribute ('id', 'action2');
    document.body.appendChild (zNode);

}
function yes(){
    document.getElementById("question").innerHTML = "Ok, we're done. Thenks for sending us your <br>data!</br>";
    document.getElementById("myButton3").remove();
    document.getElementById("myButton4").remove();
}


