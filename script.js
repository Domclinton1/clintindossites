//formulario
document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const orcamento = document.getElementById("orcamento").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto =
      "Olá! Me chamo " +
      nome +
      ".%0A" +
      "Serviço de interesse: " +
      servico +
      ".%0A" +
      "Orçamento estimado: " +
      orcamento +
      ".%0A" +
      "Mensagem: " +
      mensagem;

    const url = "https://wa.me/5531994038782?text=" + texto;

    window.open(url, "_blank");
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

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
