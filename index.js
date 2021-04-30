const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
const checkbox = document.getElementById('checkbox');
const cursor = document.querySelector('.cursor');


document.onclick = function(e){
    if(e.target.id !=='sidebar' && e.target.id !== 'toggle'){
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
});


checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});