let Btn = document.querySelector ('button');
Btn.addEventListener('click' ,inputMsg);

function inputMsg (){
let name = prompt('Enter name of Student');
Btn.textContent = 'Roll No.1:' + name;
}

