//creating DOM elements
const getStarted = document.querySelector('.openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector("#close");
const beginGameBtn = document.getElementById('beginGame');

//Objects
const questions100 = [
    {
        prompt: 'According to a popular saying, those facing the consequences of their actions are "paying the" what?\nA: Meter\nB: Taxman\nC: Piper\nD: Alimony',
        answer: 'C'
    },
    {
        prompt: 'What car company launched the ad slogan "Drivers Wanted" in the 1990s?\nA: Volkswagen\nB: Audi\nC: BMW\nD: Mercedes',
        answer: 'A'
    },
    {
        prompt: 'Which Disney character famously leaves a glass slipper behind at a royal ball?\nA: Elsa\nB: Cinderella\nC: Snow White\nD: Sleeping Beauty',
        answer: 'B'
    }
]





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