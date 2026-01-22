// Formulário WhatsApp (suporta múltiplos forms)
document.querySelectorAll(".form-whatsapp").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = form.querySelector('[name="nome"]').value;
    const servico = form.querySelector('[name="servico"]').value;
    const orcamento = form.querySelector('[name="orcamento"]').value;
    const mensagem = form.querySelector('[name="mensagem"]').value;
    const endereco = form.querySelector('[name="endereco"]')?.value || "";

    const origem = form.dataset.origem || "Site";

    let texto = `📍 Origem: ${origem}%0A`;
    texto += `👤 Nome: ${nome}%0A`;
    texto += `🛠 Serviço: ${servico}%0A`;
    texto += `💰 Orçamento: ${orcamento}%0A`;

    if (endereco) {
      texto += `🌍 Local: ${endereco}%0A`;
    }

    if (mensagem) {
      texto += `💬 Mensagem: ${mensagem}`;
    }

    const url = `https://wa.me/5531994038782?text=${texto}`;

    window.open(url, "_blank");

    /* Google Analytics Event */
    if (typeof gtag === "function") {
      gtag("event", "lead_whatsapp", {
        origem: origem,
        servico: servico,
      });
    }
  });
});

//carrossel netflix
function abrirProjeto(imagem) {
  document.getElementById("imagemProjeto").src = imagem;
  document.getElementById("modalProjeto").classList.add("ativo");
  document.body.style.overflow = "hidden";
}

function fecharProjeto() {
  document.getElementById("modalProjeto").classList.remove("ativo");
  document.body.style.overflow = "auto";
}

//faq script
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;

    // fecha os outros
    document.querySelectorAll(".faq-item").forEach((faq) => {
      if (faq !== item) faq.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

//menu mobile
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const overlay = document.getElementById("menuOverlay");

toggle.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});
