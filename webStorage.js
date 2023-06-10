// sessionStorage.setItem("name","balaji");


localStorage.setItem("name","balaji");

const temp = document.getElementById("demo")
temp.innerHTML = localStorage.getItem("name");

const myObj = {
    name : "Ravi",
    myArray : ["balaji","ravi","baby","nirmal"],
    // logName : function(){
    //     console.log(this.name);
    // }
    dept : "cce"
};

localStorage.setItem("myObjValue",JSON.stringify(myObj));

const myData = JSON.parse(localStorage.getItem("myObjValue"));

console.log(myData);

console.log(localStorage.key(0));

// localStorage.removeItem("name");
