var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{
    
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo')
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    }else{
        ul.classList.add('ativo')
        document.querySelector('.menu-icon img').src = 'img/Close.png';
    }

})
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetID = this.getAttribute("href");
            const targetSection = document.querySelector(targetID);

            const topOffset = targetSection.offsetTop;

            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        });
    });
});
