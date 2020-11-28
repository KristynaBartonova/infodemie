'use strict';

const menicko = document.querySelector('#nav-btn');
let navigace = document.querySelector('#nav');
const vyber = document.querySelectorAll('.nav a');

menicko.addEventListener('click',() => {
  navigace.classList.toggle('nav-closed');}
  );

vyber.addEventListener('click',() => {
  navigace.classList.add('nav-closed');}
  );
