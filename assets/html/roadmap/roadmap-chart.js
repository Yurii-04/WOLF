const infographic = document.querySelector("#infographic");

infographic.addEventListener("click", (e) => {
    const article = e.target.closest("article");
    if (article) {
        article.classList.toggle("active");
    }
});

document.addEventListener("mouseup", (e) => {
    const activeArticles = document.querySelectorAll("article.active");
    activeArticles.forEach((article) => {
        if (!article.contains(e.target) && article !== e.target) {
            article.classList.remove("active");
        }
    });
});

document.querySelectorAll("#infographic article .btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const isprev = e.target === e.target.parentElement.firstElementChild;
        const article = btn.closest("article");
        const step = parseInt(article.getAttribute("data-step"));
        const nextStep = isprev ? step - 1 : step + 1;
        const next = document.querySelector(`[data-step="${nextStep}"]`);

        if (next) {
            next.classList.add("active");
            next.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    });
});
