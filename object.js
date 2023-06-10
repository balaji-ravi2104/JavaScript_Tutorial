//  Comparing two JavaScript objects always returns false.
 let balaji = {
    name : "Balaji",
    age : 19,
    dept : "CCE",
    rollNo : "20CC003",
    college : "SECE",

    exam: function(){
        console.log("you are eligible or exam");
    }
 };

 console.log(balaji.name);
//  both will do same operation
 console.log(balaji["name"]);

//  for invoking the function inside the object
balaji.exam();
balaji["exam()"];