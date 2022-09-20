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
const buttonD = document.querySelector('button.d');
const countDownClock = document.querySelector(".timer");
const levelsWon = document.querySelectorAll('.money-won');
const loseMessage = document.getElementById('loss');
const phoneFriendMessage = document.getElementById('phoneFriend');
const phoneFriendBtn = document.querySelector('.phoneAFriend');
const fiftyFiftyBtn = document.querySelector('.fiftyBtn');



//Global Variables
const questions = [];

let currentAns = null

let currentQuestion = questions.shift();
console.log(currentQuestion);


let timeoutId;
let intervalId;

let level = -1;


//Functions
const openModal = () => {
    modal.style.display = 'block';
    stopTimerMusic();
};

const closeModal = () => {
    modal.style.display = 'none';
  };

  
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const question = arr[randomIndex];
    questions.push(question);
};

const getNextQuestion = () => { 
    currentQuestion = questions.shift()
    promptDisplay.innerHTML = currentQuestion.prompt
    buttonA.innerHTML = currentQuestion.a;
    buttonB.innerHTML = currentQuestion.b;
    buttonC.innerHTML = currentQuestion.c;
    buttonD.innerHTML = currentQuestion.d;
    timeoutId = setTimeout(() => {
		thinkingAudio.play();
		thinkingAudio.volume = 0.3;
	}, 4000);
    phoneFriendMessage.style.display = 'none';
};

const checkWin = (ans, ques) => {
    if (ans === ques.answer) {
      stopTimerMusic();
	  correctAnswerAudio.play();
	  correctAnswerAudio.volume = 0.3;
      getNextQuestion();
      level++;
      levelsWon[level].classList.add('highlight');
    } else {
      gameOver();
    }
};
  

const startTimerMusic = () => {
	// start audio
	letsPlayAudio.play();
	letsPlayAudio.volume = 0.3;
	timeoutId = setTimeout(() => {
		thinkingAudio.play();
		thinkingAudio.volume = 0.3;
	}, 4000); 
};

const openGame = () => {
    mainGame.style.visibility = 'visible';
    levelEl.style.visibility = 'visible';
    modal.style.display = 'none';
    getStarted.style.display = 'none';
    startTimerMusic();
};

const stopTimerMusic = () => {
	clearTimeout(timeoutId);
	clearInterval(intervalId);
	letsPlayAudio.pause();
	letsPlayAudio.currentTime = 0;
	thinkingAudio.pause();
	thinkingAudio.currentTime = 0;
	wrongAnswerAudio.pause();
	wrongAnswerAudio.currentTime = 0;
	correctAnswerAudio.pause();
	correctAnswerAudio.currentTime = 0;
};

const gameOver = () => {
    stopTimerMusic();
    wrongAnswerAudio.play();
	wrongAnswerAudio.volume = 0.3;
    mainGame.style.visibility = 'hidden';
    levelEl.style.visibility = 'hidden';
    loseMessage.style.display = 'block';
    setTimeout(location.reload.bind(location), 4000);
};

const phone = (currentQuestion) => {
    phoneFriendMessage.style.display = 'block';
    phoneFriendMessage.innerHTML = `And here I thought you knew everything! The answer is ${questions.currentAns}.`;
    phoneFriendBtn.style.visibility = 'hidden';
};

const fittyFitty = (ques) => {
    let answer = ques.answer
    let keys = Object.keys(ques)
    let j = 0
    while (j < 2) {
      for (let i = 1; i < keys.length; i++) {
        if (answer != keys[i] && keys[i] != 'answer' && j < 2) {
          let a = keys[i]
          delete ques[a]
          j++
        }
      }
    }
    console.log(ques);
};

    // function timer(){
    //     var sec = 15;
    //     var timer = setInterval(function(){
    //         countDownClock.innerHTML='00:'+sec;
    //         sec--;
    //         if (sec === 0) {
    //             clearInterval(timer);
    //             gameOver();
    //         }
    //     }, 1000);
    // }

    // const fiftyFifty () => {

    // }



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
        d: 'Logs',
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

const questions2000 = [
    {
        prompt: 'What colour were the Pyramids of Giza originally?',
        a: 'white',
        b: 'brown',
        c: 'orange',
        d: 'gold',
        answer: 'a'
    },
    {
        prompt: 'According to Greek Mythology who was the first woman on Earth',
        a: 'Hera',
        b: 'Pandora',
        c: 'Aphrodite',
        d: 'Persephone',
        answer: 'b'
    },
    {
        prompt: 'Which country consumes the most chocolate per capita?',
        a: 'USA',
        b: 'Switzerland',
        c: 'France',
        d: 'Belgium',
        answer: 'b'
    }
]

const questions4000 = [
    {
        prompt: "Which two U.S. states don’t observe Daylight Savings Time?",
        a: 'Alaska & Kentucky',
        b: 'Florida & Michigan',
        c: 'Alaska & Hawaii',
        d: 'Arizona & Hawaii',
        answer: 'd'
    },
    {
        prompt: "About how many taste buds does the average human tongue have?",
        a: '10,000',
        b: '7,000',
        c: '18,000',
        d: '22,000',
        answer: 'a'
    },
    {
        prompt: 'Which country produces the most coffee in the world?',
        a: 'Colombia',
        b: 'Israel',
        c: 'Brazil',
        d: 'Italy',
        answer: 'c'
    }
]

const questions8000 = [
    {
        prompt: "Which Of Shakespeare’s Plays Is The Longest?",
        a: 'Hamlet',
        b: 'Macbeth',
        c: 'Romeo & Juliet',
        d: 'Othello',
        answer: 'a'
    },
    {
        prompt: 'Which mammal has no vocal cords?',
        a: 'Bats',
        b: 'Giraffes',
        c: 'Kangaroos',
        d: 'Otters',
        answer: 'b'
    },
    {
        prompt: 'What does M&M stand for?',
        a: 'Mary & Mark',
        b: 'Mifflin & Mars',
        c: 'Mars & Murrie',
        d: 'Maddy & May',
        answer: 'c'
    }
]

const questions15000 = [
    {
        prompt: 'Who was the shortest player ever to play in the NBA?',
        a: 'Tyrone Bogues',
        b: 'Keith Jennings',
        c: 'Spud Webb',
        d: 'Mel Hirsch',
        answer: 'a'
    },
    {
        prompt: 'Approximately, how many grapes are needed for only one bottle of wine?',
        a: '400',
        b: '1200',
        c: '2,000',
        d: '700',
        answer: 'd'
    },
    {
        prompt: 'Where on the human body is the Zygomatic bone found?',
        a: 'Calf',
        b: 'Cheek',
        c: 'Ankle',
        d: 'Hip',
        answer: 'b'
    }
]

const questions32000 = [
    {
        prompt: 'How many bricks is the Empire State Building made of?',
        a: '10 million',
        b: '14 million',
        c: '5 million',
        d: '18 million',
        answer: 'a'
    },
    {
        prompt: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
        a: 'Madonna',
        b: 'Nicki Minaj',
        c: 'Lady Gaga',
        d: 'Fergie',
        answer: 'c'
    },
    {
        prompt: 'What is the loudest animal on Earth?',
        a: 'African elephant',
        b: 'Sperm whale',
        c: 'Lion',
        d: 'Humpback whale',
        answer: 'b'
    }
]

const questions64000 = [
    {
        prompt: 'What is the national animal of Scotland?',
        a: 'Puffin',
        b: 'Loch Ness Monster',
        c: 'Sheep',
        d: 'Unicorn',
        answer: 'd'
    },
    {
        prompt: "Who is People Magazine’s Sexiest Man Alive in 1989?",
        a: 'Richard Gere',
        b: 'Sean Connery',
        c: 'Tom Cruise',
        d: 'Liam Neeson',
        answer: 'b'
    },
    {
        prompt: 'What was the first toy to be advertised on television?',
        a: 'Mr. Potato Head',
        b: 'yo-yo',
        c: 'slinky',
        d: 'Barbie',
        answer: 'a'
    }
]

const questions125000 = [
    {
        prompt: 'The fear of number 13 is called what?',
        a: 'Triskaidekaphobia',
        b: 'Bathmophobia',
        c: 'Chronomentrophobia',
        d: 'Verminophobia',
        answer: 'a'
    },
    {
        prompt: 'Which continent has hosted The Olympics the most times?',
        a: 'North America',
        b: 'Europe',
        c: 'Africa',
        d: 'Asia',
        answer: 'b'
    },
    {
        prompt: "What is the world’s most venomous fish?",
        a: 'Puffer fish',
        b: 'Tigerfish',
        c: 'Stonefish',
        d: 'Red Lionfish',
        answer: 'c'
    }
]

const questions250000 = [
    {
        prompt: 'In the human body, what is the Hallux?',
        a: 'Thumb',
        b: 'Elbow',
        c: 'Big Toe',
        d: 'Knuckle',
        answer: 'c'
    },
    {
        prompt: 'Which Female Pharaoh Had The Longest Reign?',
        a: 'Cleopatra',
        b: 'Nefertiti',
        c: 'Hatshepsut',
        d: 'Ashotep',
        answer: 'c'
    },
    {
        prompt: 'How many paintings were sold by The Vincent Van Gogh in his lifetime?',
        a: 'none',
        b: '1',
        c: '32',
        d: '98',
        answer: 'b'
    }
]

const questions500000 = [
    {
        prompt: 'Which world leader is famous for his “Little Red Book”?',
        a: 'Narendra Modi',
        b: 'Mario Draghi',
        c: 'Mao Zedong',
        d: 'Fumio Kishida',
        answer: 'c'
    },
    {
        prompt: 'How Many U.S. Presidents Have Been Assassinated?',
        a: 'One',
        b: 'Two',
        c: 'Three',
        d: 'Four',
        answer: 'd'
    },
    {
        prompt: 'What was the name of the first computer?',
        a: 'ENIAC',
        b: 'Obelix',
        c: 'Generation Macintosh',
        d: 'TIFRAC',
        answer: 'a' 
    }
]



const questionsMillion = [
    {
        prompt: "In the children’s book series, where is Paddington Bear originally from?",
        a: 'Peru',
        b: 'United Kingdom',
        c: 'The Netherlands',
        d: 'Canada',
        answer: 'a'
    },
    {
        prompt: 'What letter must appear at the beginning of the registration number of all non-military aircrafts in the U.S.?',
        a: 'N',
        b: 'E',
        c: 'D',
        d: 'R',
        answer: 'a'
    },
    {
        prompt: 'Which insect shorted out an early supercomputer and inspired the term “computer bug”?',
        a: 'Spider',
        b: 'Moth',
        c: 'Roach',
        d: 'fly',
        answer: 'b'
    }
]


getRandomItem(questions100);
getRandomItem(questions200);
getRandomItem(questions300);
getRandomItem(questions500);
getRandomItem(questions1000);
getRandomItem(questions2000);
getRandomItem(questions4000);
getRandomItem(questions8000);
getRandomItem(questions15000);
getRandomItem(questions32000);
getRandomItem(questions64000);
getRandomItem(questions125000);
getRandomItem(questions250000);
getRandomItem(questions500000);
getRandomItem(questionsMillion);
getNextQuestion();
console.log(questions)


//Event Listeners
getStarted.addEventListener('click', openModal);
closeBtn.addEventListener("click", closeModal);
// beginGameBtn.addEventListener('click', startTimerMusic);
beginGameBtn.addEventListener('click', openGame);
buttonA.addEventListener('click', (e) => {
    currentAns = 'a'
    checkWin(currentAns, currentQuestion)
  });
  
  buttonB.addEventListener('click', (e) => {
    currentAns = 'b'
    checkWin(currentAns, currentQuestion)
  });
  
  buttonC.addEventListener('click', (e) => {
    currentAns = 'c'
    checkWin(currentAns, currentQuestion)
  });
  
  buttonD.addEventListener('click', (e) => {
    currentAns = 'd'
    checkWin(currentAns, currentQuestion)
  });

  phoneFriendBtn.addEventListener('click', phone);
  fiftyFiftyBtn.addEventListener('click', fittyFitty(currentQuestion));



