document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll(".col-md-4");

    function animateProductCards() {
        let delay = 0;
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = "10";
            }, delay);
            delay += 700; // Adjust the delay here (500 milliseconds in this case)
        });
    }

    animateProductCards();

    window.onbeforeunload = function() {
        productCards.forEach((card) => {
            card.style.opacity = "0";
        });
    };
});

// เลือก footer ของคุณ
const footer = document.querySelector('footer');

// ตรวจสอบการเลื่อนหน้าเว็บ
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // หรือค่าที่คุณต้องการ
        footer.classList.add('fixed-footer');
    } else {
        footer.classList.remove('fixed-footer');
    }
});

