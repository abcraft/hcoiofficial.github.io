var header = document.getElementById('header');
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 60)
});