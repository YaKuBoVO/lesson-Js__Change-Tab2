"use strict"
let input = document.querySelector('input');
let button = document.querySelector('button');
let tab = document.querySelectorAll('.tab-name p');
let comment = document.querySelector('.tab-comment');
let acTive = document.querySelector('.active');

input.onclick = () => {
   input.style.borderBottom = "1px solid #000";
}

button.onclick = () =>{
   if(input.value <= 3) {
      for(let i = 0; i < tab.length; i++) {
         tab[i].classList.remove("active");
      }
      tab[input.value-1].classList.add("active");

      comment.innerHTML = `<p> ${tab[input.value-1].textContent} content</p>`
   }  else {
      alert('Index is invalid');
   }
}


for(let i = 0; i < tab.length; i++) {
   tab[i].onclick = () =>{
      for(let j = 0; j < tab.length; j++) {
         tab[j].classList.remove("active");
      }
      tab[i].classList.add("active");


   comment.innerHTML = `<p>${tab[i].textContent} content</p>`
   }
}
//console.log(tab[1].textContent);