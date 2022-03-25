const menu = document.getElementById("menu-btn");
const header = document.querySelector('.header');
 
menu.onclick = () => {

    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}
 
const themeTogler =  document.getElementById('theme-toggler');

themeTogler.onclick = () => {

    themeTogler.classList.toggle('fa-sun');

    if (themeTogler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
     
    }else{
        document.body.classList.remove('active');
    }
}