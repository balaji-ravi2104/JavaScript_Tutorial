// function clickFunction(){
//     console.log("Hello");
// }
// function keypress(e){
//     if(e.code === "Enter")
//         console.log(e.target.value); 
// }

document.getElementById('p1').addEventListener('click', function(e){
    console.log(e.target.innerText);
})

document.getElementById('buttn').addEventListener('click', function(e){
    // it will stop the event bubbling
    // e.stopPropagation();
    console.log('Button clicked');
})
// Event Bubbling
document.getElementById('container').addEventListener('click', function(e){
    console.log('Container clicked');
})


// append & remove Child using DOM element
$temp = document.getElementById('temp');

$h2 = document.createElement('h2');
$h2.innerText = "This is h2 Tag Element";
$h2.id = "myh2";

$temp.appendChild($h2);
// $temp.removeChild($h2);
// console.log($h2);