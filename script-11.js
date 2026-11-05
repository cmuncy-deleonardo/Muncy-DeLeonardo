const buttons = document.querySelectorAll('.program-btn');

const descriptionBox = document.querySelector('#program-description');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    const isAlreadyShowing = button.classList.contains('revealed');
    
    buttons.forEach(b => b.classList.remove('revealed'));
    
    if (isAlreadyShowing) {
      descriptionBox.textContent = "";
    } else {
      button.classList.add('revealed');
      
      descriptionBox.textContent = button.getAttribute('data-description');
    }
  });
});
