// Toggle class active
const navbarNav = document.querySelector('.navbar-nav')
// Klik
document.querySelector('#paket-menu').onclick = () => {
    navbarNav.classList.toggle('active')
}

// Klik Terserah
const paket =document.querySelector ('#paket-menu');

document.addEventListener('click', function(e) {
    if(!paket.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});