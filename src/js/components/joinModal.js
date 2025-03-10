const modal = document.querySelector(".join-modal__flex-box");
const modalSetting = localStorage.getItem("closeModal");
const button = document.querySelector(".join-modal__close");

if (modalSetting === null) {
  if (modal.classList.contains("is-hidden")) {
    modal.classList.remove("is-hidden");
  }
}

if (modalSetting === "True") {
  modal.classList.add("is-hidden");
}

button.addEventListener("click", (e) => {
  localStorage.setItem("closeModal", "True");
  modal.classList.add("is-hidden");
});
