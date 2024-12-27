const gameArea = document.getElementById('game-area');
const lastTimeSpan = document.getElementById('last-time');
const bestTimeSpan = document.getElementById('best-time');

let startTime;
let timeoutId;
let isWaiting = false;
let bestTime = Infinity;

function startGame() {
    if (isWaiting) return;
    
    gameArea.style.backgroundColor = 'red';
    gameArea.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
    gameArea.textContent = 'Wait for green...';
    isWaiting = true;
    
    // Random delay between 3-5.5 seconds
    const delay = Math.random() * 2500 + 3000;
    
    timeoutId = setTimeout(() => {
        gameArea.style.backgroundColor = 'green';
        gameArea.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.5)';
        gameArea.textContent = 'CLICK NOW!';
        startTime = Date.now();
    }, delay);
}

function handleClick() {
    if (!isWaiting) {
        startGame();
        return;
    }
    
    if (gameArea.style.backgroundColor === 'red') {
        // Clicked too early
        clearTimeout(timeoutId);
        gameArea.style.backgroundColor = '#ff6b6b';
        gameArea.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.5)';
        gameArea.textContent = 'Too early! Click to try again';
        isWaiting = false;
        return;
    }
    
    // Calculate reaction time
    const reactionTime = Date.now() - startTime;
    lastTimeSpan.textContent = reactionTime;
    
    // Update best time
    if (reactionTime < bestTime) {
        bestTime = reactionTime;
        bestTimeSpan.textContent = bestTime;
        // Add celebration effect
        gameArea.style.transform = 'scale(1.05)';
        setTimeout(() => {
            gameArea.style.transform = 'scale(1)';
        }, 200);
    }
    
    gameArea.style.backgroundColor = '#4CAF50';
    gameArea.style.boxShadow = '0 0 20px rgba(76, 175, 80, 0.5)';
    gameArea.textContent = `${reactionTime}ms - Click to play again`;
    isWaiting = false;
}

gameArea.addEventListener('click', handleClick);
document.addEventListener('keydown', (event) => {
    handleClick();
}); 