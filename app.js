//creating DOM elements
const getStarted = document.querySelector('.openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector("#close");
const beginGameBtn = document.getElementById('beginGame');
const letsPlayAudio = document.getElementById('lets-play');
const thinkingAudio = document.getElementById('easy');
const wrongAnswerAudio = document.getElementById('wrong-answer');
const correctAnswerAudio = document.getElementById('correct-answer');


//Questions array
const questions = [];



//Functions
const openModal = () => {
    modal.style.display = 'block';
};

const closeModal = () => {
    modal.style.display = 'none';
  };

  
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const question = arr[randomIndex];
    questions.push(question.prompt);
}


//Objects
const questions100 = [
    {
        prompt: 'According to a popular saying, those facing the consequences of their actions are "paying the" what?',
        a: 'Meter',
        b: 'Taxman',
        c: 'Piper',
        d: 'Alimony',
        answer: 'C'
    },
    {
        prompt: 'What car company launched the ad slogan "Drivers Wanted" in the 1990s?',
        a: 'Volkswagen',
        b: 'Audi',
        c: 'BMW',
        d: 'Mercedes',
        answer: 'A'
    },
    {
        prompt: 'Which Disney character famously leaves a glass slipper behind at a royal ball?',
        a: 'Elsa',
        b: 'Cinderella',
        c: 'Snow White',
        d: 'Sleeping Beauty',
        answer: 'B'
    }
]

getRandomItem(questions100);
console.log(questions)

const questions200 = [
    {
        prompt: 'At the end of a traditional Christian wedding, what does the bride throw to her female guests?',
        a: 'A handful of rice',
        b: 'A ring',
        c: 'A cement block',
        d: 'A bouquet of flowers',
        answer: 'D'
    },
    {
        prompt: "According to a common piece of advice, 'Don't take any wooden' what?",
        a: 'Nickels',
        b: 'Teeth',
        c: 'Spoons',
        d:'Logs',
        answer: 'A'
    },
    {
        prompt: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?',
        a: 'Hangar',
        b: 'Terminal',
        c: 'Concourse',
        d: 'Carousel',
        answer: 'D'
    }
]

const questions300 = [
    {
        prompt: 'Which of these expressions refers to a tall tale or unbelievable story?',
        a: 'Cock & bull',
        b: 'Bull & bear',
        c: 'Cat & dog',
        d: 'Giraffe & emu',
        answer: 'A'
    },
    {
        prompt: 'Which of these types of footwear are usually at least 25 inches long and up to 12 inches wide?',
        a: 'In-line skates',
        b: 'Hiking boots',
        c: 'Galoshes',
        d: 'Snowshoes',
        answer: 'D'
    },
    {
        prompt: 'According to a popular phrase, if things are going well for you, "the world is your" what?',
        a: 'Anenome',
        b: 'Mussel',
        c: 'Oyster',
        d: 'Shrimp',
        answer: 'C'
    }
]

questions500 = [
    {
        prompt: 'Longtime pals Matt Damon and Ben Affleck attended highschool together in a suburb of what city?',
        a: 'Atlanta',
        b: 'Chicago',
        c: 'Detroit',
        d: 'Boston',
        answer: 'D'
    },
    {
        prompt: 'Which of these birds has the biggest brain relative to its size?\nA: Ostrich\nB: Hummingbird\nC: Sparrow\nD: Eagle',
        answer: 'B'
    },
    {
        prompt: 'Nadia Comaneci was the first gymnast to ever do what at the Olympics?\nA: Get a perfect 10\nB: Finish with a broken ankle\nC: Win an Olympic gold medal\nD: Forfeit her position',
        answer: 'A'
    }
]

const questions1000 = [
    {},
    {},
    {}
]





//Event Listeners
getStarted.addEventListener('click', openModal);
closeBtn.addEventListener("click", closeModal);