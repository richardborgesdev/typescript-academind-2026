function deriveFinalPrice(inputPrice: number): void {
  const finalPrice = inputPrice + inputPrice * 0.19;
  const outputEl = document.getElementById('final-price');

  if (!outputEl) {
    return;
  }

  outputEl.textContent = 'Final Price: ' + finalPrice + ' €';
}

const formEl = document.querySelector('form');

formEl?.addEventListener('submit', function (event: SubmitEvent) {
  event.preventDefault();

  const fd = new FormData(event.currentTarget as HTMLFormElement);
  const inputPrice = fd.get('price');

  deriveFinalPrice(Number(inputPrice));
});
