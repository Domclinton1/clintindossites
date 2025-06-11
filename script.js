/*SCRIPT DO FAQ*/
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');

    // Fecha os outros se quiser comportamento de acordeão exclusivo
    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});



const toggleButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});