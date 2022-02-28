const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav-list');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("change");
    menu.classList.toggle('activeMenu');
})

const list = document.querySelectorAll('.btn-items a')
list.forEach(item =>{ 
    item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active'); });
    item.classList.add('active');
    })
})
        