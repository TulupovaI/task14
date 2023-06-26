// №1
let count = +prompt('Введіть число');
function counter() {
    let num = +prompt('Введіть число');
    count = count + num;
    return count;
}

alert( counter()); 
alert( counter()); 
alert( counter()); 

// №2


function average(ownArray) {
  let sum = 0;
  let count = 0;

  for(let i = 0; i < ownArray.length; i++){
      if (!isNaN(ownArray[i])) {
          count += 1;
          sum += ownArray[i];
      }     
  }
  return  itog = sum / count;
}

let array = [7, 5, 'a','s','ds', 4 , 'wqe', 4];
let result = average(array);
alert(itog);



// №3


function doMath(x, znak, y){
  if(znak == '^'){
    alert(x ** y);
    return;
  }
  let result = alert(eval(`${x} ${znak} ${y}`));
  return result;
}
doMath(prompt('Введіть число'), prompt('Введіть знак'), prompt('Введіть число'))

// №4

function arrAdd() {
  let arr = [];
  let qt = +prompt('Кількість масивів в масиві');

  for(let i = 0; i < qt; i++) {
      arr.push([]);

      let qt2 = prompt('Кількість елементів в масиві №' + (i + 1));

      for(let j = 0; j < qt2; j++) {
          let elem = prompt('Введіть значення елементу №' + (j + 1) + ' в масиві');
          arr[i].push([elem]);
      }
  }

  console.log(arr);
}

let functionResult = arrAdd();

// №5

function foo(string, letter) {  

  let arr1 = string.split('');
  let arr2 = letter.split('');

  const s = new Set(arr2);
  console.log((arr1.filter(e => !s.has(e))).join(''));

  }

let text = prompt('Введіть повідомлення');
let symbols = prompt('Введіть символи');


foo(text, symbols)

  