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


checkbox.addEventListener('click', () => {

    darkMode = localStorage.getItem('darkMode');

    if(darkMode !=="enabled"){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {

    document.body.classList.add('dark');

    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    localStorage.setItem("darkMode", null);

    document.body.classList.remove('dark');

}

if(darkMode === 'enabled'){
    enableDarkMode(); 
}
