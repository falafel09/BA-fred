document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


const scroll = new LocomotiveScroll();

scroll.on('call', func => {
    console.log("hi");
});