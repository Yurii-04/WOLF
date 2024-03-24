const loader = document.querySelector("#preloader");

setTimeout(() => {
    loader.classList.add('disappearance');
    setTimeout(() => {
        window.location.href = './assets/html/main.html';
    }, 300);
}, 3200);

