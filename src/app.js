const inputModal = document.getElementById('input-modal');
const showInputBtn = document.getElementById('show-input-modal');

inputModal.addEventListener('shown.bs.modal', () => showInputBtn.click);