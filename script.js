document.querySelectorAll(".form-whatsapp").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Campos básicos
    const nome = form.querySelector('[name="nome"]')?.value || "";
    const whatsapp = form.querySelector('[name="whatsapp"]')?.value || "";

    // Campos antigos
    const servico = form.querySelector('[name="servico"]')?.value || "";
    const orcamento = form.querySelector('[name="orcamento"]')?.value || "";
    const endereco = form.querySelector('[name="endereco"]')?.value || "";
    const mensagem = form.querySelector('[name="mensagem"]')?.value || "";

    // Campos novos (tráfego pago)
    const tipoNegocio =
      form.querySelector('[name="tipo-negocio"]')?.value || "";
    const jaAnuncia = form.querySelector('[name="ja-anuncia"]')?.value || "";
    const investimento =
      form.querySelector('[name="investimento"]')?.value || "";

    const origem = form.dataset.origem || "Site";

    let texto = `📍 Origem: ${origem}%0A`;
    texto += `👤 Nome: ${nome}%0A`;

    if (whatsapp) {
      texto += `📞 WhatsApp: ${whatsapp}%0A`;
    }

    if (servico) {
      texto += `🛠 Serviço: ${servico}%0A`;
    }

    if (tipoNegocio) {
      texto += `🏢 Tipo de negócio: ${tipoNegocio}%0A`;
    }

    if (jaAnuncia) {
      texto += `📢 Já anuncia: ${jaAnuncia}%0A`;
    }

    if (orcamento) {
      texto += `💰 Orçamento estimado: ${orcamento}%0A`;
    }

    if (investimento) {
      texto += `💸 Investimento mensal em anúncios: ${investimento}%0A`;
    }

    if (endereco) {
      texto += `🌍 Local: ${endereco}%0A`;
    }

    if (mensagem) {
      texto += `💬 Mensagem: ${mensagem}`;
    }

    const url = `https://wa.me/5531994038782?text=${texto}`;

    window.open(url, "_blank");

    // Evento Google Analytics (se existir)
    if (typeof gtag === "function") {
      gtag("event", "lead_whatsapp", {
        origem: origem,
        tipo_negocio: tipoNegocio || servico || "nao_informado",
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
