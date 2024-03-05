document.getElementById('menuToggle').addEventListener('click', function() {
    var menu = document.getElementById('mainMenu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
});
