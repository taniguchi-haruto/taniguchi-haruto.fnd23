'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//コンソールへの色付け変数
const black = '\u001b[30m';
const red = '\u001b[31m';
const green = '\u001b[32m';
const yellow = '\u001b[33m';
const blue = '\u001b[34m';
const magenta = '\u001b[35m';
const cyan = '\u001b[36m';
const white = '\u001b[37m';
const reset = '\u001b[0m';

const button1 = document.getElementById("button1");
function logEvent1(event1) {
  counter1 += 1;
  console.log(counter1);
  console.log(event1);
}
let counter1 = 0;
button1.addEventListener("click", logEvent1);
const button2 = document.getElementById("button2");
function logEvent2(event2) {
  counter2 += 1;
  console.log(counter2);
  console.log(event2);
}
let counter2 = 0;
button2.addEventListener("click", logEvent2);


const lastButton = document.getElementById("lastButton");
lastButton.addEventListener("click", passIvent);
function passIvent() {
  if (counter1 === 3 && counter2 === 9) {
    const width = 900;
    const height = 500;
    const disPage = "pass.html";
    const sudName = "passWord";
    const sudx = (screen.availWidth - width) / 2;
    const sudy = (screen.availHeight - height);
    const sudWin = "width=" + width + ",height=" + height + ",top=" + sudy + ",left=" + sudx;
    window.open(disPage, sudName, sudWin);
    counter1 = 0;
    counter2 = 0;
  }
}
const getGeme = document.getElementById("geme")
function geme() {
  const result = [];
  const iti = Math.random() * 4 + 1;
  const ni = Math.random() * 4 + 1;
  const san = Math.random() * 4 + 1;
  const yon = Math.random() * 4 + 1;
  const resu1 = document.getElementById("re-su1");
  const resu2 = document.getElementById("re-su2");
  const resu3 = document.getElementById("re-su3");
  const resu4 = document.getElementById("re-su4");
  const resu = [resu1, resu2, resu3, resu4];
  const motoArr = [iti, ni, san, yon];
  const arr = [iti, ni, san, yon];
  const newArr = arr.sort(function (num1, num2) {
    console.log(num1)
    console.log(num2)
    return Number(num2) - Number(num1)
  });
  console.log(newArr)
  for (const num of newArr) {
    for (let i = 0; i < arr.length; i++) {
      if (num === motoArr[i]) {
        console.log(motoArr.indexOf(num))
        resu[i].innerHTML = (newArr.indexOf(num) + 1) + "位";
        result.push(motoArr.indexOf(num));
        console.log(result)
      }
    }
  }

  return result
}


getGeme.addEventListener("click", geme)




// function tester(test){
//   console.log(test)
// }
// mondaibotan.addEventListener("mousemove", tester)
