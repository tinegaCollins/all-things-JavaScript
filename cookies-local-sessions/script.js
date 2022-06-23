//local 
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
console.log(localStorage.getItem('name'));


//session

sessionStorage.setItem('name', 'collo tinega');
sessionStorage.removeItem('name');
console.log(sessionStorage.getItem('name'));

//cookies

document.cookie = 'name=John: expires=' + new Date(9999, 0 , 1).toUTCString();
document.cookie = 'id=12345: expires=' + new Date(9999, 0 , 1).toUTCString();


console.log(document.cookie);