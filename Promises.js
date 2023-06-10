const post = [
    {title:'Post One', body:'This is post first'},
    {title:'Post Two', body:'This is Post Two'}
];

function getPost(){
    setTimeout(()=>{ 
        let output = '';
        post.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(props){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            post.push(props);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error : Something Went Wrong');
            }
        },2000);
    });
}
createPost({title:'Post Third', body:'This is post Third'})
.then(getPost)
.catch(err => console.log(err));



// Async / Await
// async function init(){
//     await createPost({title:'Post Third', body:'This is post Third'});
//     getPost();
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