// Reading the File data

// function myFunction(){
//     getText("fetch_info.txt");
// }

// async function getText(file){
//     let myObj = await fetch(file);
//     let mytext = await myObj.text();
//     document.getElementById("demo").innerHTML = mytext;
// }



// const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata";

// async function getData(){
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }

// getData();


// fetch('https://official-joke-api.appspot.com/jokes/programming/random')
// .then((res)=> res.json())
// .then((msg)=> console.log(msg[0].setup,msg[0].punchline))
// .catch((err)=> console.log(err))


// fetch('https://api-thirukkural.vercel.app/api?num=13')
// .then(res=> {
//     if(res.ok)
//         console.log("Success");
//     else
//         console.log("Failure");

//     return res.json()
// })
// .then((msg)=> console.log(msg.line1,msg.line2,msg.tam_exp))
// .catch((err)=>console.log(err))


// get,post
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos',{
    method : 'POST',
    headers : {'content-type' : 'application/json'},
    body : JSON.stringify({
        userId : 12,
        id : 100,
        title : 'test',
        completed : false
    })
})
.then(response => response.json())
.then(json => console.log(json))