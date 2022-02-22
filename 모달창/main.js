const btnModal = document.querySelector(".btn-modal");
const modal = document.querySelector(".modal-overlay");
const btnClose = document.querySelector(".btn-close");


btnModal.addEventListener('click', () => {
    modal.style.display = "flex"
})

btnClose.addEventListener('click',() => {
    modal.style.display = "none"
})

//오버레이 클릭 시 창 꺼지기 
modal.addEventListener('click', (i) => {
    const eventTarget= i.target;
    if(eventTarget.classList.contains("modal-overlay")) {
        modal.style.display = "none"
    }
})

// esc 버튼 눌러서 창 꺼지기
window.addEventListener("keyup", (i) => {
    if(modal.style.display === "flex" && i.key === "Escape") {
        modal.style.display = "none"
    }
})