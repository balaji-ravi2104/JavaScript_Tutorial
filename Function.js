// function, argument, retrun

// function expression vs function declaration
 
// fat arrow functions

function findResult(mark){
    let result="";
    if(mark>=50){
        result="pass";
    }else{
        result="fail";
    }
    return result;
}

let result = findResult(60);
console.log(result);

// function expression vs function declaration

//  function expression --> also called anonymous

// let temp = new Function("x","y","return x*y;"); function constructor

let x=10,y=20;
let temp = function(x,y){
    return x*y;
    // console.log(x*y);
}
let ans = temp(x,y);
console.log(ans);



// fat arrow functions

let sayHello  = () => {
    console.log("Hello");
}
sayHello();