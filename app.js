//creating DOM elements
const getStarted = document.querySelector('.openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector("#close");
const beginGameBtn = document.getElementById('beginGame');


//Functions
const openModal = () => {
    modal.style.display = 'block';
};

const closeModal = () => {
    modal.style.display = 'none';
  };

//Event Listeners
getStarted.addEventListener('click', openModal);
closeBtn.addEventListener("click", closeModal);