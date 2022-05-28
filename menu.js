const nav = document.querySelector('.nav');

window.addEventListener('scrol', function(){
    nav.classList.toggle('active', window.scrollY >0)
})
