/* 
function checkTZ() {
    let tz = document.getElementById("tz").value;
    let i = 0;
    
    if (tz.length !== 9) {
        console.log("false");
        return false;
    }

    while(i < tz.length)
    {
      
        if(Number.isInteger(Number(tz[i])) === false)
        {
            console.log("false");
            return false;
        }
        else
            i++;
    }
    console.log("true");
    return true;
    
} */

/* function primeNumber(num1) {
    if(num1 <= 1)
        console.log("not a prime");
    else
    {
        for(let i = 2; i < num1 ; i++)
        {
            if(num1 % i == 0)
            {
                console.log("not a prime");
                return;
            }
        }
        console.log("prime");
    }
}

primeNumber(15); */

/* function addSpace(str1) {
    let i = 0; 
    let str2 = "";
    while(i < str1.length)
    {
        if(str1[i] === str1[i].toUpperCase())
            str2+= " ";
        str2+= str1[i];
        i++;
    }
    console.log(str2);
}

addSpace("abCdEf"); */
/* 
function stringInside (str1, str2){
    let counter = 0;
    while(str2.includes(str1) == true)
    {
        
            counter++;
            let index = str2.indexOf(str1);
            str2 = str2.substring(index + str1.length, str2.length);
    }
    console.log(counter);
    return counter;
}

stringInside("sun", "sundaysun"); */

/* function sortString(str1) {
    
    let arr = str1.split("");

    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    console.log(arr.join(""));
}

console.log(sortString("fcab"));  */

/* let num1 = '';
let num2 = '';
let op = '';
let input = document.getElementById("input");

function press(value) {
    if (['+', '-', '*', '/'].includes(value)) 
    {
        if (num1 === '') 
            return; 
        op = value;
        input.textContent = num1 + op;
    } 
    else 
    {
        if (!op) 
        {
            num1 += value;
            input.textContent = num1;
        } 
        else 
        {
            num2 += value;
            input.textContent = num1 + op + num2;
        }
    }
  }

function clearCalc() {
    num1 = '';
    num2 = '';
    op = '';
    input.textContent = '';
  }

function calculate() {
    if (num1 && num2 && op) 
    {
        let result;
        let a = Number(num1);
        let b = Number(num2);

        switch(op) 
        {
            case '+': 
                result = a + b; break;
            case '-': 
                result = a - b; break;
            case '*': 
                result = a * b; break;
            case '/': 
                if(b!== 0)
                    result = a / b ;
                else 
                    result = 'error';
            break;
      }

      input.textContent = result;
      num1 = result.toString();
      num2 = '';
      op = '';
    }
  } */