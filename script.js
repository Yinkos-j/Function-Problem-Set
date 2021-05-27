
// is Even()
function isEven(number){
    if(number%2 === 0){
        console.log(true);
    }
    else{ 
        console.log(false);
    }
}
isEven(4);
isEven(21);
isEven(68);
isEven(333);
// factorial()
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      console.log(answer);
    }  
  }

factorial(5)
factorial(2)
factorial(10)
 factorial(0)
//kebabToSnake()
 function kebabToSnake(str) {
     var myString = str.replace(/-/g, "_"); ;
     console.log(myString);
 }
 kebabToSnake("hello-world")
 kebabToSnake("dogs-are-awesome")
 kebabToSnake("blah")




 





