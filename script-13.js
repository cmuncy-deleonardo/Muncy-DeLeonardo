{
  const buttons = document.querySelectorAll('.program-btn');
  const descriptionBox = document.querySelector('#program-description');
  const signupBtn = document.querySelector('#signup-btn');
  const programDropdown = document.querySelector('#program');
  const form = document.querySelector('form');
  const nameInput = document.querySelector('#name');
  const confirmationMessage = document.querySelector('#confirmation-message');
   const submitBtn = form.querySelector('button[type="submit"]');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const isAlreadyShowing = button.classList.contains('revealed');
      
      buttons.forEach(b => b.classList.remove('revealed'));
      
      if (isAlreadyShowing) {
        descriptionBox.textContent = "";
        signupBtn.style.display = "none";
      } else {
        button.classList.add('revealed');
        
        const descriptionText = button.getAttribute('data-description');
        descriptionBox.textContent = descriptionText;
        
        const programName = button.textContent;
        signupBtn.textContent = `Click to select ${programName}`;
        signupBtn.style.display = "inline-block";
        
        signupBtn.onclick = () => {
          for (let i = 0; i < programDropdown.options.length; i++) {
            if (programDropdown.options[i].text === programName) {
              programDropdown.selectedIndex = i;
              break;
            }
          }
         submitBtn.textContent = "Sign me up!";
          submitBtn.disabled = false; 
          
signupBtn.textContent = `Selected ${programName}!`;
          
          programDropdown.closest('form').scrollIntoView({ behavior: 'smooth' });
          programDropdown.focus();
        };
      }
    });
  });
  programDropdown.addEventListener('change', () => {
    submitBtn.textContent = "Sign me up!";
    submitBtn.disabled = false;
  });
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = nameInput.value;
    const selectedProgram = programDropdown.options[programDropdown.selectedIndex].text;

    confirmationMessage.textContent = `Thank you, ${userName}! We look forward to you joining our ${selectedProgram}.`;

        submitBtn.textContent = "Signed Up!";
    submitBtn.disabled = true;
  });
}