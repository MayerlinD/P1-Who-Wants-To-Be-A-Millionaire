//creating DOM elements
const getStarted = document.querySelector('.openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector("#close");
const beginGameBtn = document.getElementById('beginGame');


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
    return question.prompt;
}


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

console.log(getRandomItem(questions100));

const questions200 = [
    {
        prompt: 'At the end of a traditional Christian wedding, what does the bride throw to her female guests?\nA: A handful of rice\nB: A ring\nC: A cement block\nD: A bouquet of flowers',
        answer: 'D'
    },
    {
        prompt: "According to a common piece of advice, 'Don't take any wooden' what?\nA: Nickels\nB: Teeth\nC: Spoons\nD:Logs",
        answer: 'A'
    },
    {
        prompt: 'What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?\nA: Hangar\nB: Terminal\nC: Concourse\nD: Carousel',
        answer: 'D'
    }
]

const questions300 = [
    {
        prompt: 'Which of these expressions refers to a tall tale or unbelievable story?\nA: Cock & bull\nB: Bull & bear\nC: Cat & dog\nD: Giraffe & emu',
        answer: 'A'
    },
    {
        promp: 'Which of these types of footwear are usually at least 25 inches long and up to 12 inches wide?\nA: In-line skates\nB: Hiking boots\nC: Galoshes\nD: Snowshoes',
        answer: 'D'
    },
    {
        prompt: 'According to a popular phrase, if things are going well for you, "the world is your" what?\nA: Anenome\nB: Mussel\nC: Oyster\nD: Shrimp',
        answer: 'C'
    }
]

questions500 = [
    {
        prompt: 'Longtime pals Matt Damon and Ben Affleck attended highschool together in a suburb of what city?\nA: Atlanta\nB: Chicago\nC: Detroit\nD: Boston',
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