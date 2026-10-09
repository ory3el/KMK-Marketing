document.addEventListener("DOMContentLoaded", () => {
  // Inicialização dos Ícones Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Lógica do Formulário via WhatsApp
  const form = document.getElementById("whatsappForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const telefone = document.getElementById("telefone").value;
      const segmento = document.getElementById("segmento").value;

      // Substitua pelo número com DDD da KMK
      const numeroWhatsApp = "5500000000000";

      const textoMensagem = `Olá! Gostaria de agendar um diagnóstico para o meu negócio.%0A%0A*Nome/Empresa:* ${encodeURIComponent(nome)}%0A*Telefone:* ${encodeURIComponent(telefone)}%0A*Segmento:* ${encodeURIComponent(segmento)}`;

      window.open(`https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`, "_blank");
    });
  }
});
