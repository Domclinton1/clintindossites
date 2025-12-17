/*SCRIPT DO FAQ*/
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    item.classList.toggle("active");

    // Fecha os outros se quiser comportamento de acordeão exclusivo
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Lista das seções que você quer rastrear
  const sections = [
    "services",
    "portifolio",
    "sobre",
    "avaliacoes",
    "faq",
    "cta-final",
    "contato",
  ];

  // Cria o observador
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id;

          // Envia o evento pro Google Analytics
          gtag("event", "view_section", {
            section_name: sectionName,
          });

          console.log("Seção visualizada:", sectionName);
        }
      });
    },
    { threshold: 0.5 }
  ); // dispara quando 50% da seção aparece na tela

  // Observa cada seção
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Número do seu WhatsApp
  const phone = "5531994038782";

  // Serviços e mensagens personalizadas
  const servicos = [
    {
      id: "servico-site",
      msg: "Olá! Tenho interesse em um Site Profissional.",
    },
    {
      id: "servico-landing",
      msg: "Olá! Gostei da Landing Page, quero saber mais.",
    },
    {
      id: "servico-trafego",
      msg: "Olá! Tenho interesse em Gestão de Tráfego Pago.",
    },
    {
      id: "servico-manutencao",
      msg: "Olá! Preciso de manutenção no meu computador.",
    },
    {
      id: "servico-saas",
      msg: "Olá, gostaria de fazer um sistema Saas e gostaria de saber como funciona",
    },
    {
      id: "servico-ecommerce",
      msg: "Olá, gostaria de adquirir uma loja virtual e gostaria de mais informações",
    },
  ];

  servicos.forEach((servico) => {
    const el = document.getElementById(servico.id);
    if (el) {
      el.addEventListener("click", () => {
        const msg = encodeURIComponent(servico.msg);
        window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Define o número do WhatsApp (se quiser padronizar)
  const phone = "5531994038782";

  // Define os botões e suas origens
  const botoesWhatsapp = [
    { id: "btn-hero", origem: "Hero Section" },
    { id: "btn-ctafinal", origem: "Sobre Section" },
    { id: "btn-portifolio", origem: "Portifolio Section" },
    { id: "btn-servicos", origem: "Servicos Section" }, // caso tenha botão além dos cards
  ];

  botoesWhatsapp.forEach((botao) => {
    const el = document.getElementById(botao.id);
    if (el) {
      el.addEventListener("click", () => {
        gtag("event", "click_whatsapp", {
          origem: botao.origem,
        });
      });
    }
  });
});
