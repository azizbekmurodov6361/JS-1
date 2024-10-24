alert("Vazifa-1");

let age = prompt("Yoshingizni kiriting");

if (age<=18) {
    alert("Yoshsiz. O'qishingiz kerak");
} else if (age>18 && age<=50) {
    alert("Ishlashingiz kerak");
} else if (age>50 && age<=59) {
    alert("Yaqinda pensiyaga chiqasiz");
} else if (age>59 && age<=150) {
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)");
} else {
    alert("Nimadir notog'ri ketib qoldi");
}


alert("Vazifa-2");

let time = prompt("Vaqtni kiriting");

if(time>6 && time<=10){
    alert("soat ertalabgi "+time)
}else if(time>10 && time<=15){
    alert("soat obeddagi "+time)
}else if(time>15 && time<=18){
    alert("soat obeddan keyingi "+time)
}else if(time>18 && time<=22){
    alert("soat kechquringi "+time)
}else if(time>22 && time<=24 || time>0 && time<=6){
    alert('soat kechasi '+time);
}else{
    alert("Nimadir notog'ri ketib qoldi");
}

alert("Vazifa-3");


let value1 = +prompt("1-Qimatni kiriting");

let value2 = +prompt("2-Qimatni kiriting");

let value3 = +prompt("3-Qimatni kiriting");


if(value1>value2 && value1<value3 || value1<value2 && value1>value3){
    alert("O'rtacha son "+value1);
}else if(value2>value1 && value2<value3 || value2<value1 && value2>value3){
    alert("O'rtacha son " + value2);
}else if(value3>value1 && value3<value2 || value3<value1 && value3>value2) {
    alert("O'rtacha son " + value3);
}else{
    alert("Nimadir notog'ri ketib qoldi");
}


alert('Vazifa-4 "Izzatulloh" boss name');

let name = prompt("Ismingizni kiriting");

if (name == "Izzatulloh") {
    alert("Hello Boss");
}else{
    alert("Hello guest");
}