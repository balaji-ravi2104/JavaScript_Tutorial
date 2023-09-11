// /*
// ==========================================================
// Storage Management
// ==========================================================
// Local Storage, Session Storage
//  - Local storage is persistent storage of browser.
//  - Session storage is temporary storage of browser, till
//    that session only.
//  - We can store data in the form of key and value pairs.
//  - It supports only string data.(to store objects stringify them)
//  - Keys are unique
//  - All functions are common for local and session storage.
//  - setItem() function is used to store item.
//  - getItem() function is used to read item.
//  - removeItem() function is used to delete item.
//  - localStorage and sessionStorage belong to 'window' object.
// */


// Setting values in local storage
// If we want to use sessionStorage then replace localStorage with sessionStorage

// function setItem(){
//   window.localStorage.setItem('user',document.getElementById('uname').value)
//   document.getElementById('stat').innerHTML='Item Set'
// }
// function getItem(){
//   let info = window.localStorage.getItem('user')
//   console.log(info);
//   if(info == null)
//       info = 'Empty Storage'
//   document.getElementById('stat').innerHTML=info
// }
// function removeItem(){
//   window.localStorage.removeItem('user')
//   document.getElementById('stat').innerHTML='Item Removed'
// }

function setItem(){
  window.sessionStorage.setItem('user',document.getElementById('uname').value)
  document.getElementById('stat').innerHTML='Item Set'
}
function getItem(){
  let info = window.sessionStorage.getItem('user')
  console.log(info);
  if(info == null)
      info = 'Empty Storage'
  document.getElementById('stat').innerHTML=info
}
function removeItem(){
  window.sessionStorage.removeItem('user')
  document.getElementById('stat').innerHTML='Item Removed'
}