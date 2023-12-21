const modalsEl = document.getElementById('modal');
const modalsToggler = document.querySelectorAll('[data-modal-target]');
const modals = document.querySelectorAll('[data-modal]');
const closeBtns = document.querySelectorAll('[data-modal-close]')
const modalTitle = document.getElementById('modal-title')


closeBtns.forEach(btn =>{
    btn.addEventListener("click", closeModal)
})



modalsToggler.forEach(toggler =>{
    toggler.addEventListener("click",async ()=>{
       const modalName= await toggler.dataset.modalTarget;
        toggleModal(modalName)
    })
})

function toggleModal(modalName) {
    openModal();
    modalTitle.innerText = formatter.capitalizeFirstLetter(modalName);
    console.log(modalName)
    modals.forEach((modal) => {
        
        modal.classList.add('hidden');
        if (modalName == modal.dataset.modal) {
            modal.classList.remove('hidden');
        }
    });
}



function closeModal(){
    modalsEl.classList.add('hidden');
}

function openModal(){
    modalsEl.classList.remove('hidden');
}





