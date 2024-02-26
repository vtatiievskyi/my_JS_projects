let age = prompt("Введіть Ваш повний вік: ")

//Проверка отрицательных кейсов

if(isNaN(age)){
    console.log("Помилка!\nВведіть будь-ласка дозволене число")
}

//Определение падежа

let remainder = 0; //для вычисления остатка от деления

if(100>age && age>20)
{
  remainder = age%10;
  if (remainder == 1){
    console.log("Ваш вік " + age + " рік")
  } else if(remainder >= 2 && remainder <= 4){
    console.log("Ваш вік " + age + " роки")
  } else {
    console.log("Ваш вік " + age + " років")
  }
} else if((age <= 0 || age > 100)){
    console.log('Ви ввели невірний вік\nВведіть будь-ласка вік від 1 до 100');
  }else{
    if(age==1){
        console.log("Ваш вік " + age + " рік")
    }else if(age >= 2 && age <= 4){
        console.log("Ваш вік " + age + " роки")
    }else if(age > 4 && age <= 100){
        console.log("Ваш вік " + age + " років")
    }
}