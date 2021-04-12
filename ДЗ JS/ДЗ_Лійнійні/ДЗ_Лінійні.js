function findAge(){
let ageChild = parseInt(document.getElementById("age").value)
let res = document.getElementById("result")
let schl = document.getElementById("school")
let unvrt = document.getElementById("university")
if (ageChild<3){
    let sadok = ageChild - 3
    sadok *= -1
    res.innerText =  `Років до садка ${sadok}`
}
else if (3<ageChild && ageChild<6){
    res.innerText = 'Дитина вже відвідує садок'
}
else if (ageChild>6){
    res.innerText = 'Дитина уже відвідувала садок'
}
if (ageChild<6){
    school = ageChild - 6
    school *= -1
    schl.innerText = `Років до школи ${school}`
}
else if (6<ageChild && ageChild<17){
    schl.innerText = "Навчається в школу"
}
else{
    schl.innerText = "Закінчила школу"
}
if (ageChild<17){
    university = ageChild - 17
    university *= -1
    unvrt.innerText = `Років до університету ${university}`
}
else if (17<ageChild && ageChild<21){
    unvrt.innerText = 'Навчається в університеті'
}
else{
    unvrt.innerText = 'Закінчила університет'
}
}