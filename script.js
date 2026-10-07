/* ===== CONFIGURAÇÃO DO WHATSAPP =====
   Troque pelo número com DDI + DDD, só dígitos. Ex.: "5511999999999" */
const WHATSAPP_NUMBER = "SEU_NUMERO_WHATSAPP";

/* Mensagem automática de cada botão (atributo data-wa no HTML) */
const WA_MESSAGES = {
  header: "Olá! Gostaria de saber como a KMK Marketing pode trazer mais clientes para o meu negócio.",
  hero: "Olá! Vim pelo site da KMK Marketing e quero conversar sobre como atrair mais clientes para minha empresa.",
  cta: "Olá! Gostaria de agendar um diagnóstico gratuito para minha empresa.",
  footer: "Olá! Quero conhecer os serviços da KMK Marketing.",
  float: "Olá! Gostaria de falar com a KMK Marketing."
};

document.querySelectorAll("[data-wa]").forEach((a) => {
  const msg = WA_MESSAGES[a.dataset.wa] || WA_MESSAGES.hero;
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});

/* ===== Menu mobile ===== */
const hd = document.getElementById("hd");
const burger = document.getElementById("burger");
const setMenu = (open) => {
  hd.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
burger.addEventListener("click", () => setMenu(!hd.classList.contains("open")));
document.querySelectorAll("#nav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

/* ===== Header ao rolar + barra de progresso ===== */
const bar = document.getElementById("bar");
let ticking = false;
function onScroll() {
  ticking = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  hd.classList.toggle("scrolled", scrollY > 24);
  bar.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
}
addEventListener("scroll", () => {
  if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
}, { passive: true });
onScroll();

/* ===== Animação de entrada (fade + slide-up) ===== */
const items = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add("in"));
}
