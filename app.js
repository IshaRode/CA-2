document.addEventListener('DOMContentLoaded', () => {
    const playerForm = document.getElementById('playerForm');
  
    playerForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const player1Name = document.getElementById('player1').value;
      const player2Name = document.getElementById('player2').value;
  
      
      displayThankYouMessage();
      changeHeaderText();
    });
  });
  
  function displayThankYouMessage() {
    const formContainer = document.querySelector('.form');
    formContainer.innerHTML = "<p class='thanks' >You can start the game now!</p>";
  }
  
  function changeHeaderText() {
    const headerText = document.querySelector('.name');
    headerText.textContent = 'Great!!!';
  }

const playerForm = document.getElementById('playerForm');

playerForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Getting the player names from the input 
    const player1Name = document.getElementById('player1').value;
    const player2Name = document.getElementById('player2').value;

    // Storing player names in local storage
    localStorage.setItem('player1', player1Name);
    localStorage.setItem('player2', player2Name);

  
    document.getElementById('startGameBtn').style.display = 'inline-block';
});
// starting the game
function startGame() {
   
    console.log('Game is started');
}

