// const post = [
//     {title:'Post One', body:'This is first post'},
//     {title:'Post Two', body:'This is Post Two'}
// ];

// function getPost(){
//     setTimeout(()=>{
//         let output = '';
//         post.forEach((post,index)=>{
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// function createPost(props,callBack){
//     setTimeout(()=>{
//         post.push(props);
//         callBack();
//     },2000);
// }
// // getPost();

// createPost({title:'Post Third', body:'This is Post Third'}, getPost);



// function fun_one(args){
//     console.log(args());
// }
// // passing arrow function as argument(callback function) to fun_one
// fun_one(()=>{
//     return "Balaji"
// })


function add(num,callBack){
    return callBack((num+5),false);
}

function sub(num,callBack){
    return callBack((num-2),false);
}

function mul(num,callBack){
    return callBack((num*3),false);
}

// this is called callback hell
add(5,(addRes,err)=>{
    if(!err){
        sub(addRes,(subRes,err)=>{
            if(!err){
                mul(subRes,(mulRes,err)=>{
                    if(!err){
                        console.log(mulRes);
                    }else{
                        console.log(err);
                    }
                })
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
})