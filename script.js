// =====================================
// SCROLL SUAVE PARA LINKS DO MENU
// =====================================
document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // compensar header fixo

        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


// =====================================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES
// =====================================
const sections = document.querySelectorAll(".sessao");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});


// =====================================
// DESTAQUE AUTOMÁTICO DO MENU ATIVO
// =====================================
const navLinks = document.querySelectorAll("header ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "rgba(0, 0, 0, 0.637)";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "rgb(43, 132, 162)";
        }
    });
});


// =====================================
// EFEITO MAIS SUAVE NOS CARDS
// =====================================
const cards = document.querySelectorAll('[class^="cards"]');

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});


// =====================================
// BOTÃO VOLTAR AO TOPO
// =====================================
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "30px";
backToTop.style.right = "30px";
backToTop.style.padding = "10px 15px";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.backgroundColor = "rgb(43, 132, 162)";
backToTop.style.color = "white";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.fontSize = "18px";
backToTop.style.zIndex = "1000";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
