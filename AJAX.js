// open(method, url, async, user, psw)	
// method: the request type GET or POST
// url: the file location
// async: true (asynchronous) or false (synchronous)
// user: optional user name
// psw: optional password


// readyState
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// status	
// 200: "OK"
// 400 :"Bad Request"
// 403: "Forbidden"
// 404: "Not Found"
// 500 : "Internal Server Error"


document.querySelector('button').addEventListener('click', ()=>{

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        // console.log(xhr.readyState);

        if(xhr.readyState === 4 && xhr.status === 200){
            const postArray = JSON.parse(xhr.response);
            console.log(postArray);
            // myFunction(postArray);
            // console.log(JSON.parse(xhr.responseText));
            // console.log(xhr.responseText);
        }

        // xhr.onload = function(){
        //     console.log(xhr.responseText);
        // }
    }

    // xhr.open('GET',"fetch_info.txt", true); 
    xhr.open('GET',"temp.json", true);
    // xhr.open('GET',"https://jsonplaceholder.typicode.com/photos", true);
    xhr.send();

});


// Displaying the data in the webpage

// const content  = document.getElementsByClassName('container')[0];

// function myFunction(postArray){
//     for(let i=0;i<postArray.length;i++){
//         const newElement = document.createElement("h3");
//         newElement.textContent =`${i+1}) ${postArray[i].title}`;
//         content.append(newElement);
//     }
// }

// let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && xhr.status === 200){
//             const postArray = JSON.parse(xhr.response);
//             // console.log(postArray);
//             myFunction(postArray);
//         }
//     }
//     xhr.open('GET',"https://jsonplaceholder.typicode.com/photos", true);
//     xhr.send();