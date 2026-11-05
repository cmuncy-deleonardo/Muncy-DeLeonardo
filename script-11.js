const buttons = document.querySelectorAll('.program-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
  
    const isAlreadyRevealed = button.classList.contains('revealed');
    
    buttons.forEach(b => b.classList.remove('revealed'));
    
    if (!isAlreadyRevealed) {
      button.classList.add('revealed');
    }
  });
});