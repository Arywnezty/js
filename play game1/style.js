const prevBoxes = document.querySelectorAll(".box");
const container = document.getElementById("container");
const boxes = [];
const movesElement = document.getElementById("moves");
const matchesElement = document.getElementById("matches");
const timerElement = document.getElementById("timer");
const winMessage = document.getElementById("winMessage");
const finalStats = document.getElementById("finalStats");

let moves = 0;
let seconds = 0;
let matchCount = 0;
let timer;
let isGameRunning = false;


const imageUrls = [
    "./img/1.svg",  
    "./img/2.svg",   
    "./img/3.svg",   
    "./img/4.svg",   
    "./img/5.svg",  
    "./img/6.svg",    
    "./img/7.svg", 
    "./img/8.svg", 
];

function initGame() {
    boxes.length = 0;
    
   
    const pairedImages = [...imageUrls, ...imageUrls];
    
    
    for (let i = pairedImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairedImages[i], pairedImages[j]] = [pairedImages[j], pairedImages[i]];
    }
    
   
    for (let i = 0; i < prevBoxes.length; i++) {
        const box = prevBoxes[i];
        box.querySelector('img').src = pairedImages[i];
        boxes.push(box);
    }
    
    
    for (let i = 0; i < boxes.length; i++) {
        const randomIndex = Math.floor(Math.random() * boxes.length);
        const temp = boxes[randomIndex];
        boxes[randomIndex] = boxes[i];
        boxes[i] = temp;
    }
    
    container.innerHTML = "";
    for (const box of boxes) {
        container.appendChild(box);
        box.classList.remove("disable", "matched", "hidden");
        box.addEventListener("click", selected);
    }

    moves = 0;
    matchCount = 0;
    seconds = 0;
    movesElement.textContent = moves;
    matchesElement.textContent = matchCount;
    timerElement.textContent = seconds;

    setTimeout(hiddenAll, 2000);
    setTimeout(() => {
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
        isGameRunning = true;
    }, 2000);
}

function updateTimer() {
    seconds++;
    timerElement.textContent = seconds;
}

const selectedboxes = [];

function hiddenAll() {
    for (const box of boxes) {
        box.classList.add("hidden");
    }
}

function selected(event) {
    if (!isGameRunning) return;
    
    if (selectedboxes.length < 2 && !event.target.classList.contains("matched")) {
        event.target.classList.remove("hidden");
        selectedboxes.push(event.target);
        event.target.removeEventListener("click", selected);
    }
    
    if (selectedboxes.length === 2) {
        moves++;
        movesElement.textContent = moves;
        
        const img1 = selectedboxes[0].querySelector('img').src;
        const img2 = selectedboxes[1].querySelector('img').src;
        
        if (img1 === img2) {
            matched();
        } else {
            notmached();
        }
    }
}

const matched = () => {
    selectedboxes[0].classList.add("matched");
    selectedboxes[1].classList.add("matched");
    matchCount++;
    matchesElement.textContent = matchCount;
    selectedboxes.length = 0;
    
    if (matchCount === boxes.length / 2) {
        clearInterval(timer);
        isGameRunning = false;
        showWinMessage();
    }
}

const notmached = () => {
    disableAll();
    setTimeout(() => {
        selectedboxes[0].classList.add("hidden");
        selectedboxes[1].classList.add("hidden");
        selectedboxes[0].addEventListener("click", selected);
        selectedboxes[1].addEventListener("click", selected);
        selectedboxes.length = 0;
        undisableAll();
    }, 1000);
}

const disableAll = () => {
    for (const box of boxes) {
        box.classList.add("disable");
    }
}

const undisableAll = () => {
    for (const box of boxes) {
        box.classList.remove("disable");
    }
}

function showWinMessage() {
    finalStats.innerHTML = `
        <p>time: ${seconds} seconds</p>
        <p>moves ${moves}</p>
    `;
    winMessage.style.display = "block";
}

function resetGame() {
    winMessage.style.display = "none";
    initGame();
}

initGame();