let modal = document.querySelector('.modal');
let openModal = document.querySelector('#openModalBtn');
let closeModalBtn = document.querySelector('#closeModalBtn');

openModal.addEventListener('click', () => {
    modal.showModal()
});
closeModalBtn.addEventListener('click', () => {
    modal.close()
});

let modalTwo = document.querySelector('.modalTwo');
let openModalWin = document.querySelector('#openModal');
let closeModal = document.querySelector('#closeModalBtn2');

openModalWin.addEventListener('click', () => {
    modalTwo.showModal()
});
closeModal = document.addEventListener('click', () => {
    modalTwo.close()
});