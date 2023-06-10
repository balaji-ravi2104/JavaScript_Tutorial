function myFunction(){
    const input = document.getElementById("id1");

    if(!input.checkValidity()){
        document.getElementById("demo").innerHTML = input.validationMessage;
    }else{
        document.getElementById("demo").innerHTML = "Input Ok";
    }
}

// function myFunction() {
//     let text;
//     if (document.getElementById("id1").validity.rangeOverflow) {
//       text = "Value too large";
//     } else {
//       text = "Input OK";
//     } 
//     document.getElementById("demo").innerHTML = text;
// }

// function myFunction() {
//     let text = "Value OK";
//     if (document.getElementById("id1").validity.rangeUnderflow) {
//       text = "Value too small";
//     }
//     else {
//        text = "Input OK";
//      } 
//       document.getElementById("demo").innerHTML = text;
// }