//creating DOM elements
const getStarted = document.querySelector('.openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector("#close");
const beginGameBtn = document.getElementById('beginGame');
const letsPlayAudio = document.getElementById('lets-play');
const thinkingAudio = document.getElementById('easy');
const wrongAnswerAudio = document.getElementById('wrong-answer');
const correctAnswerAudio = document.getElementById('correct-answer');
const mainGame = document.getElementById('main-game-container');
const levelEl = document.getElementById('level');
const promptDisplay = document.querySelector('.prompt');
const displayEl = document.querySelector('.display');
const buttonA = document.querySelector('button.a');
const buttonB = document.querySelector('button.b');
const buttonC = document.querySelector('button.c');
const buttonD = document.querySelector('button.d')

//Questions array
const questions = [];

let timeoutId;

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
};

// const startTimerMusic = () => {
// 	// start audio
// 	letsPlayAudio.play();
// 	letsPlayAudio.volume = 0.3;
// 	timeoutId = setTimeout(() => {
// 		thinkingAudio.play();
// 		thinkingAudio.volume = 0.3;
// 	}, 4000); 
// };

const openGame = () => {
    mainGame.style.visibility = 'visible';
    levelEl.style.visibility = 'visible';
    modal.style.display = 'none';
    getStarted.style.display = 'none';
    letsPlayAudio.play();
	letsPlayAudio.volume = 0.3;
	timeoutId = setTimeout(() => {
		thinkingAudio.play();
		thinkingAudio.volume = 0.3;
	}, 4000); 
}


//Objects
const questions100 = [
    {
        prompt: 'According to a popular saying, those facing the consequences of their actions are "paying the" what?',
        a: 'Meter',
        b: 'Taxman',
        c: 'Piper',
        d: 'Alimony',
        answer: 'c'
    },
    {
        prompt: 'What car company launched the ad slogan "Drivers Wanted" in the 1990s?',
        a: 'Volkswagen',
        b: 'Audi',
        c: 'BMW',
        d: 'Mercedes',
        answer: 'a'
    },
    {
        prompt: 'Which Disney character famously leaves a glass slipper behind at a royal ball?',
        a: 'Elsa',
        b: 'Cinderella',
        c: 'Snow White',
        d: 'Sleeping Beauty',
        answer: 'b'
    }
]



const questions200 = [
    {
        prompt: 'At the end of a traditional Christian wedding, what does the bride throw to her female guests?',
        a: 'A handful of rice',
        b: 'A ring',
        c: 'A cement block',
        d: 'A bouquet of flowers',
        answer: 'd'
    },
    {
        prompt: "According to a common piece of advice, 'Don't take any wooden' what?",
        a: 'Nickels',
        b: 'Teeth',
        c: 'Spoons',
        d:'Logs',
        answer: 'a'
    },
    {
        prompt: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?',
        a: 'Hangar',
        b: 'Terminal',
        c: 'Concourse',
        d: 'Carousel',
        answer: 'd'
    }
]

const questions300 = [
    {
        prompt: 'Which of these expressions refers to a tall tale or unbelievable story?',
        a: 'Cock & bull',
        b: 'Bull & bear',
        c: 'Cat & dog',
        d: 'Giraffe & emu',
        answer: 'a'
    },
    {
        prompt: 'Which of these types of footwear are usually at least 25 inches long and up to 12 inches wide?',
        a: 'In-line skates',
        b: 'Hiking boots',
        c: 'Galoshes',
        d: 'Snowshoes',
        answer: 'd'
    },
    {
        prompt: 'According to a popular phrase, if things are going well for you, "the world is your" what?',
        a: 'Anenome',
        b: 'Mussel',
        c: 'Oyster',
        d: 'Shrimp',
        answer: 'c'
    }
]

questions500 = [
    {
        prompt: 'Longtime pals Matt Damon and Ben Affleck attended highschool together in a suburb of what city?',
        a: 'Atlanta',
        b: 'Chicago',
        c: 'Detroit',
        d: 'Boston',
        answer: 'd'
    },
    {
        prompt: 'Which of these birds has the biggest brain relative to its size?',
        a: 'Ostrich',
        b: 'Hummingbird',
        c: 'Sparrow',
        d: 'Eagle',
        answer: 'b'
    },
    {
        prompt: 'Nadia Comaneci was the first gymnast to ever do what at the Olympics?',
        a: 'Get a perfect 10',
        b: 'Finish with a broken ankle',
        c: 'Win an Olympic gold medal',
        d: 'Forfeit her position',
        answer: 'a'
    }
]

const questions1000 = [
    {
        prompt: 'The hammer and sickle is one of the most recognisable symbols of which political ideology?',
        a: 'Communism',
        b: 'Socialism',
        c: 'Capitalism',
        d: 'Conservatism',
        answer: 'a'
    },
    {
        prompt: 'In the title of a 1982 song, the group Culture Club asks, "Do You Really Want To" what?',
        a: 'Dance',
        b: 'Hurt Me',
        c: 'Break My Heart',
        d: 'Wear That Dress',
        answer: 'b'
    },
    {
        prompt: 'In the 1960s, young idealists were often given what nickname?',
        a: 'Flower children',
        b: 'Promise keepers',
        c: 'Happy hobos',
        d: 'Tree huggers',
        answer: 'a'
    }
]

const questions2000 = []

const questions4000 = []

const questions8000 = []

const questions15000 = []

const questions32000 = []

const questions64000 = []

const questions125000 = []

const questions250000 = []

const questions500000 = []



const questionsMillion = [
    {
        prompt: "In the children’s book series, where is Paddington Bear originally from?",
        a: 'Peru',
        b: 'United Kingdom',
        c: 'The Netherlands',
        d: 'Canada',
        answer: 'A'
    },
    {
        prompt: 'What letter must appear at the beginning of the registration number of all non-military aircraft in the U.S.?',
        a: 'N',
        b: 'E',
        c: 'D',
        d: 'R',
        answer: 'A'
    },
    {
        prompt: 'Which insect shorted out an early supercomputer and inspired the term “computer bug”?',
        a: 'Spider',
        b: 'Moth',
        c: 'Beetle',
        d: 'Butterfly',
        answer: 'B'
    }
]


getRandomItem(questions100);
getRandomItem(questions200);
getRandomItem(questions300);
getRandomItem(questions500);
console.log(questions)


//Event Listeners
getStarted.addEventListener('click', openModal);
closeBtn.addEventListener("click", closeModal);
// beginGameBtn.addEventListener('click', startTimerMusic);
beginGameBtn.addEventListener('click', openGame);



