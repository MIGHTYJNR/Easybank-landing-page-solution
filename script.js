const toggle_btn = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('header .navigation');

toggle_btn.addEventListener('click', () => {
    if (navigation.classList.contains('active')) {
        navigation.classList.remove('active');
        toggle_btn.innerHTML = `<img src="./images/icon-hamburger.svg" alt="">`;
    } else {
        navigation.classList.add('active');
        toggle_btn.innerHTML = `<img src="./images/icon-close.svg" alt="">`;
    }
});
