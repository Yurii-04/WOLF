// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__list-wrapper");
const bars = hamburger.querySelectorAll(".bar");

hamburger.addEventListener("mouseenter", () => {
    bars[1].style.width = "25px";
    bars[2].style.width = "25px";
});

hamburger.addEventListener("mouseleave", () => {
    if (!hamburger.classList.contains("active")) {
        bars[1].style.width = "20px";
        bars[2].style.width = "15px";
    }
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
        bars[1].style.width = "25px";
        bars[2].style.width = "25px";
        document.documentElement.style.overflow = "hidden";
    } else {
        bars[1].style.width = "20px";
        bars[2].style.width = "15px";
        document.documentElement.style.overflow = "auto";
    }
});

document.querySelectorAll(".menu__item").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.documentElement.style.overflow = "auto";
        navMenu.blur();
    })
);

// print text
const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["WOLF - The Cryptocurrency Club"];
const typingDelay = 100;
const textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex][charIndex];
        charIndex++;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1500);
});

// tokenomics
const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programing-stats .details ul");

const chartData = {
    labels: [
        "Team",
        "Marketing",
        "Liquidity",
        "Partnership"
    ],
    data: [10, 15, 70, 5],
};

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
            },
        ],
    },
    options: {
        borderWidth: 8,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});

const populateUl = () => {
    chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class="percentage">${chartData.data[i]}%</span>`;
        ul.appendChild(li);
    });
};

populateUl();
