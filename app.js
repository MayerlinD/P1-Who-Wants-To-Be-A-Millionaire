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
const winMessage = document.getElementById('win')



//Global Variables
const questions = [];

let currentAns = null

let currentQuestion = questions.shift();
let correctAnswers = 0

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

    buttonA.style.visibility = "visible"
    buttonB.style.visibility = "visible"
    buttonC.style.visibility = "visible"
    buttonD.style.visibility = "visible"
};

const checkWin = (ans, ques) => {
    if (ans === ques.answer) {
      stopTimerMusic();
	  correctAnswerAudio.play();
	  correctAnswerAudio.volume = 0.3;
      correctAnswers = correctAnswers + 1
      if (questions.length == 0 && correctAnswers > 0) {
        mainGame.style.visibility = 'hidden';
        winMessage.style.display = 'block';
        setTimeout(location.reload.bind(location), 4000);
    } else {
        getNextQuestion();
        level++;
        levelsWon[level].classList.add('highlight');
    }
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
    getNextQuestion();
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


const phone = (currentQuest) => {
    console.log(currentQuestion)
    phoneFriendMessage.style.display = 'block';
    phoneFriendMessage.innerHTML = `And here I thought you knew everything! The answer is ${currentQuestion.answer}.`;
    phoneFriendBtn.style.visibility = 'hidden';
};

function fittyFitty(ques) {
    console.log(`Current question is ${currentQuestion}`);
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
    promptDisplay.innerHTML = ques.prompt
    console.log(ques.a,ques.b,ques.c)

    if(!ques.a) {
        console.log(ques.a)
        buttonA.style.visibility = "hidden"
    } else {
        console.log("It")
    }

    if(!ques.b) {
        buttonB.style.visibility = "hidden"
    } else {
        console.log("It")
    }

    if(!ques.c) {
        buttonC.style.visibility = "hidden"
    } else {
        console.log("It")
    }

    if(!ques.d) {
        buttonD.style.visibility = "hidden"
    } else {
        console.log("It")
    }
}

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




//Objects
const questions100 = [
    {
        prompt: 'According to a popular saying, those facing the consequences of their actions are "paying the" what?',
        a: 'A: Meter',
        b: 'B: Taxman',
        c: 'C: Piper',
        d: 'D: Alimony',
        answer: 'c'
    },
    {
        prompt: 'What car company launched the ad slogan "Drivers Wanted" in the 1990s?',
        a: 'A: Volkswagen',
        b: 'B: Audi',
        c: 'C: BMW',
        d: 'D: Mercedes',
        answer: 'a'
    },
    {
        prompt: 'Which Disney character famously leaves a glass slipper behind at a royal ball?',
        a: 'A: Elsa',
        b: 'B: Cinderella',
        c: 'C: Snow White',
        d: 'D: Sleeping Beauty',
        answer: 'b'
    }
]



const questions200 = [
    {
        prompt: 'At the end of a traditional Christian wedding, what does the bride throw to her female guests?',
        a: 'A: A handful of rice',
        b: 'B: A ring',
        c: 'C: A cement block',
        d: 'D: A bouquet of flowers',
        answer: 'd'
    },
    {
        prompt: "According to a common piece of advice, 'Don't take any wooden' what?",
        a: 'A: Nickels',
        b: 'B: Teeth',
        c: 'C: Spoons',
        d: 'D: Logs',
        answer: 'a'
    },
    {
        prompt: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?',
        a: 'A: Hangar',
        b: 'B: Terminal',
        c: 'C: Concourse',
        d: 'D: Carousel',
        answer: 'd'
    }
]

const questions300 = [
    {
        prompt: 'Which of these expressions refers to a tall tale or unbelievable story?',
        a: 'A: Cock & bull',
        b: 'B: Bull & bear',
        c: 'C: Cat & dog',
        d: 'D: Giraffe & emu',
        answer: 'a'
    },
    {
        prompt: 'Which of these types of footwear are usually at least 25 inches long and up to 12 inches wide?',
        a: 'A: In-line skates',
        b: 'B: Hiking boots',
        c: 'C: Galoshes',
        d: 'D: Snowshoes',
        answer: 'd'
    },
    {
        prompt: 'According to a popular phrase, if things are going well for you, "the world is your" what?',
        a: 'A: Anenome',
        b: 'B: Mussel',
        c: 'C: Oyster',
        d: 'D: Shrimp',
        answer: 'c'
    }
]

questions500 = [
    {
        prompt: 'Longtime pals Matt Damon and Ben Affleck attended highschool together in a suburb of what city?',
        a: 'A: Atlanta',
        b: 'B: Chicago',
        c: 'C: Detroit',
        d: 'D: Boston',
        answer: 'd'
    },
    {
        prompt: 'Which of these birds has the biggest brain relative to its size?',
        a: 'A: Ostrich',
        b: 'B: Hummingbird',
        c: 'C: Sparrow',
        d: 'D: Eagle',
        answer: 'b'
    },
    {
        prompt: 'Nadia Comaneci was the first gymnast to ever do what at the Olympics?',
        a: 'A: Get a perfect 10',
        b: 'B: Finish with a broken ankle',
        c: 'C: Win an Olympic gold medal',
        d: 'D: Forfeit her position',
        answer: 'a'
    }
]

const questions1000 = [
    {
        prompt: 'The hammer and sickle is one of the most recognisable symbols of which political ideology?',
        a: 'A: Communism',
        b: 'B: Socialism',
        c: 'C: Capitalism',
        d: 'D: Conservatism',
        answer: 'a'
    },
    {
        prompt: 'In the title of a 1982 song, the group Culture Club asks, "Do You Really Want To" what?',
        a: 'A: Dance',
        b: 'B: Hurt Me',
        c: 'C: Break My Heart',
        d: 'D: Wear That Dress',
        answer: 'b'
    },
    {
        prompt: 'In the 1960s, young idealists were often given what nickname?',
        a: 'A: Flower children',
        b: 'B: Promise keepers',
        c: 'C: Happy hobos',
        d: 'D: Tree huggers',
        answer: 'a'
    }
]

const questions2000 = [
    {
        prompt: 'What colour were the Pyramids of Giza originally?',
        a: 'A: white',
        b: 'B: brown',
        c: 'C: orange',
        d: 'D: gold',
        answer: 'a'
    },
    {
        prompt: 'According to Greek Mythology who was the first woman on Earth',
        a: 'A: Hera',
        b: 'B: Pandora',
        c: 'C: Aphrodite',
        d: 'D: Persephone',
        answer: 'b'
    },
    {
        prompt: 'Which country consumes the most chocolate per capita?',
        a: 'A: USA',
        b: 'B: Switzerland',
        c: 'C: France',
        d: 'D: Belgium',
        answer: 'b'
    }
]

const questions4000 = [
    {
        prompt: "Which two U.S. states don’t observe Daylight Savings Time?",
        a: 'A: Alaska & Kentucky',
        b: 'B: Florida & Michigan',
        c: 'C: Alaska & Hawaii',
        d: 'D: Arizona & Hawaii',
        answer: 'd'
    },
    {
        prompt: "About how many taste buds does the average human tongue have?",
        a: 'A: 10,000',
        b: 'B: 7,000',
        c: 'C: 18,000',
        d: 'D: 22,000',
        answer: 'a'
    },
    {
        prompt: 'Which country produces the most coffee in the world?',
        a: 'A: Colombia',
        b: 'B: Israel',
        c: 'C: Brazil',
        d: 'D: Italy',
        answer: 'c'
    }
]

const questions8000 = [
    {
        prompt: "Which Of Shakespeare’s Plays Is The Longest?",
        a: 'A: Hamlet',
        b: 'B: Macbeth',
        c: 'C: Romeo & Juliet',
        d: 'D: Othello',
        answer: 'a'
    },
    {
        prompt: 'Which mammal has no vocal cords?',
        a: 'A: Bats',
        b: 'B: Giraffes',
        c: 'C: Kangaroos',
        d: 'D: Otters',
        answer: 'b'
    },
    {
        prompt: 'What does M&M stand for?',
        a: 'A: Mary & Mark',
        b: 'B: Mifflin & Mars',
        c: 'C: Mars & Murrie',
        d: 'D: Maddy & May',
        answer: 'c'
    }
]

const questions15000 = [
    {
        prompt: 'Who was the shortest player ever to play in the NBA?',
        a: 'A: Tyrone Bogues',
        b: 'B: Keith Jennings',
        c: 'C: Spud Webb',
        d: 'D: Mel Hirsch',
        answer: 'a'
    },
    {
        prompt: 'Approximately, how many grapes are needed for only one bottle of wine?',
        a: 'A: 400',
        b: 'B: 1200',
        c: 'C: 2,000',
        d: 'D: 700',
        answer: 'd'
    },
    {
        prompt: 'Where on the human body is the Zygomatic bone found?',
        a: 'A: Calf',
        b: 'B: Cheek',
        c: 'C: Ankle',
        d: 'D: Hip',
        answer: 'b'
    }
]

const questions32000 = [
    {
        prompt: 'How many bricks is the Empire State Building made of?',
        a: 'A: 10 million',
        b: 'B: 14 million',
        c: 'C: 5 million',
        d: 'D: 18 million',
        answer: 'a'
    },
    {
        prompt: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
        a: 'A: Madonna',
        b: 'B: Nicki Minaj',
        c: 'C: Lady Gaga',
        d: 'D: Fergie',
        answer: 'c'
    },
    {
        prompt: 'What is the loudest animal on Earth?',
        a: 'A: African elephant',
        b: 'B: Sperm whale',
        c: 'C: Lion',
        d: 'D: Humpback whale',
        answer: 'b'
    }
]

const questions64000 = [
    {
        prompt: 'What is the national animal of Scotland?',
        a: 'A: Puffin',
        b: 'B: Loch Ness Monster',
        c: 'C: Sheep',
        d: 'D: Unicorn',
        answer: 'd'
    },
    {
        prompt: "Who is People Magazine’s Sexiest Man Alive in 1989?",
        a: 'A: Richard Gere',
        b: 'B: Sean Connery',
        c: 'C: Tom Cruise',
        d: 'D: Liam Neeson',
        answer: 'b'
    },
    {
        prompt: 'What was the first toy to be advertised on television?',
        a: 'A: Mr. Potato Head',
        b: 'B: yo-yo',
        c: 'C: slinky',
        d: 'D: Barbie',
        answer: 'a'
    }
]

const questions125000 = [
    {
        prompt: 'The fear of number 13 is called what?',
        a: 'A: Triskaidekaphobia',
        b: 'B: Bathmophobia',
        c: 'C: Chronomentrophobia',
        d: 'D: Verminophobia',
        answer: 'a'
    },
    {
        prompt: 'Which continent has hosted The Olympics the most times?',
        a: 'A: North America',
        b: 'B: Europe',
        c: 'C: Africa',
        d: 'D: Asia',
        answer: 'b'
    },
    {
        prompt: "What is the world’s most venomous fish?",
        a: 'A: Puffer fish',
        b: 'B: Tigerfish',
        c: 'C: Stonefish',
        d: 'D: Red Lionfish',
        answer: 'c'
    }
]

const questions250000 = [
    {
        prompt: 'In the human body, what is the Hallux?',
        a: 'A: Thumb',
        b: 'B: Elbow',
        c: 'C: Big Toe',
        d: 'D: Knuckle',
        answer: 'c'
    },
    {
        prompt: 'Which Female Pharaoh Had The Longest Reign?',
        a: 'A: Cleopatra',
        b: 'B: Nefertiti',
        c: 'C: Hatshepsut',
        d: 'D: Ashotep',
        answer: 'c'
    },
    {
        prompt: 'How many paintings were sold by The Vincent Van Gogh in his lifetime?',
        a: 'A: none',
        b: 'B: 1',
        c: 'C: 32',
        d: 'D: 98',
        answer: 'b'
    }
]

const questions500000 = [
    {
        prompt: 'Which world leader is famous for his “Little Red Book”?',
        a: 'A: Narendra Modi',
        b: 'B: Mario Draghi',
        c: 'C: Mao Zedong',
        d: 'D: Fumio Kishida',
        answer: 'c'
    },
    {
        prompt: 'How Many U.S. Presidents Have Been Assassinated?',
        a: 'A: One',
        b: 'B: Two',
        c: 'C: Three',
        d: 'D: Four',
        answer: 'd'
    },
    {
        prompt: 'What was the name of the first computer?',
        a: 'A: ENIAC',
        b: 'B: Obelix',
        c: 'C: Generation Macintosh',
        d: 'D: TIFRAC',
        answer: 'a' 
    }
]



const questionsMillion = [
    {
        prompt: "In the children’s book series, where is Paddington Bear originally from?",
        a: 'A: Peru',
        b: 'B: United Kingdom',
        c: 'C: The Netherlands',
        d: 'D: Canada',
        answer: 'a'
    },
    {
        prompt: 'What letter must appear at the beginning of the registration number of all non-military aircrafts in the U.S.?',
        a: 'A: N',
        b: 'B: E',
        c: 'C: D',
        d: 'D: R',
        answer: 'a'
    },
    {
        prompt: 'Which insect shorted out an early supercomputer and inspired the term “computer bug”?',
        a: 'A: Spider',
        b: 'B: Moth',
        c: 'C: Roach',
        d: 'D: fly',
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
console.log(questions)


//Event Listeners
getStarted.addEventListener('click', openModal);
closeBtn.addEventListener("click", closeModal);
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
  fiftyFiftyBtn.addEventListener('click', (e) => {
    fiftyFiftyBtn.style.visibility = 'hidden'
  })


