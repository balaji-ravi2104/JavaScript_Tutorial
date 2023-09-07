const post = [
  { title: "Post One", body: "This is post first" },
  { title: "Post Two", body: "This is Post Two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    post.forEach((post, index) => {
      output += `<li>${post.title} ${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(props) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      post.push(props);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error : Something Went Wrong");
      }
    }, 2000);
  });
}

// Using without async & await

// createPost({title:'Post Third', body:'This is post Third'})
// .then(getPost)
// .catch(err => console.log(err));

// // Async / Await

// async function init() {
//   await createPost({ title: "Post Third", body: "This is post Third" });
//   getPost();
// }
// init();

// Promise All
// const promise1 = Promise.resolve("Hello Balaji");
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) =>{
//     setTimeout(resolve,2000,'Good Boy')
// });

// Promise.all([promise1, promise2, promise3])
// .then(values => console.log(values));

// ============================================
// Promise:-
// ============================================
//  - Promises are used to handle asynchronous operations in Javascript.
//  - Promises are special Javascript objects.
//  - Promises have two states
//         	- Success    	(resolve)
//         	- Failure       	(reject)
//  - Promises can be created using the object of 'Promise' class.
//  - Promise is the predefined class in Javascript.
//  - Promises can be consumed using 'then()'

// Eg 01
// let myPromise = new Promise((resolve, reject)=>{
//     resolve('Tomorrow i will be at home')
// })
// //consume promise
// myPromise.then((posRes)=>{
//   // console.log("reslove");
//     console.log(posRes)
// },(errRes)=>{
//   // console.log("reject");
//     console.log(errRes)
// })

//Eg02
// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Success')
//     },5000)
// })
// myPromise.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// })

//Eg03
// let myPromise = new Promise((resolve, reject)=>{
//     reject('Failure')
//     resolve('Success')
// })
// myPromise.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// })

// //Eg04
// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Success')
//     },6000)
//     setTimeout(()=>{
//         reject('Failure')
//     },5000)
// })
// myPromise.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// })

// ============================================
// async and await
// ============================================
//  - Netscape released the above keywords in ES9.
//  - Above keywords are used to increase code readability.
//  - These keywords increase application performance.

// Eg05
// let myPromise = new Promise((resolve, reject)=>{
//     resolve('Hello')
// })
// async function myFun(){
//     let res = await myPromise
//     console.log(res)
// }
// myFun();

// //Eg06
// function add(num) {
//     let myPromise = new Promise((resolve, reject) => {
//         resolve(num + 5)
//     })
//     return myPromise
//     // (or)
//     // return new Promise((resolve,reject)=>{
//     //   resolve(num+5)
//     // })
// }
// function sub(num) {
//     let myPromise = new Promise((resolve, reject) => {
//         resolve(num - 3)
//     })
//     return myPromise
// }
// async function myFun() {
//     let res1 = await add(5)
//     let res2 = await sub (res1)
//     console.log(res2)
// }
// myFun()


// Solution for Callback Hell? 

function add(num) {
  return new Promise((resolve, reject) => {
    resolve(num + 5);
  });
}

function sub(num) {
  return new Promise((resolve, reject) => {
    resolve(num - 3);
  });
}
function mul(num) {
  return new Promise((resolve, reject) => {
    resolve(num * 5);
  });
}
function div(num) {
  return new Promise((resolve, reject) => {
    resolve(num / 4);
  });
}

async function myFun() {
  let addRes = await add(5);
  let subRes = await sub(addRes);
  let mulRes = await mul(subRes);
  let divRes = await div(mulRes);

  console.log(Math.round(divRes));
}

myFun();