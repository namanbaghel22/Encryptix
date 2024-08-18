burgur = document.querySelector('.burgur')
x = document.querySelector(".nav-list")
y = document.querySelector('.nav-main')

burgur.addEventListener('click', ()=>{
    x.classList.toggle('v-class-resp');
    y.classList.toggle('h-nav-resp');
})