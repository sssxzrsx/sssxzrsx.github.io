let modal = document.querySelector('.modal');
let openModal = document.querySelector('#openModalBtn');
let closeModalBtn = document.querySelector('#closeModalBtn');

openModal.addEventListener('click', () => {
    modal.showModal()
});
closeModalBtn.addEventListener('click', () => {
    modal.close()
});