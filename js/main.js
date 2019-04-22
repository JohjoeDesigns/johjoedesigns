let contact = document.querySelector('.contact');
let toggleBtn = document.querySelector('.toggle-btn');
let navbar = document.querySelector('.navbar');

            toggleBtn.addEventListener('click',() => {
               toggleBtn.classList.toggle('active');
               navbar.classList.toggle('show');
            })