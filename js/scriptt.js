const barras = document.querySelectorAll('.barra');
const valores = document.querySelectorAll('span[id^="valor"]');

barras.forEach((barra, index) => {
  valores[index].textContent = barra.value;

  barra.addEventListener('input', () => {
    valores[index].textContent = barra.value;
  });
});
