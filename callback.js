const post = [
    {title:'Post One', body:'This is first post'},
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

function createPost(props,callBack){
    setTimeout(()=>{
        post.push(props);
        callBack();
    },2000);
}
// getPost();

createPost({title:'Post Third', body:'This is Post Third'}, getPost);