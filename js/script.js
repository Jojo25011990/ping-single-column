'use strict';
// *** strict mode for safer javascript code ***

// *** Select Button (Notify Me) ***
const btn = document.querySelector('.ping__form-btn');
// *** Select Error Message ***
const errorMessage = document.querySelector('.ping__form-message');

// *** Add, click event listener to the button (Notify Me) ***
btn.addEventListener('click', e => {
  // *** Prevents default form submission ***
  e.preventDefault();

  // *** Select email input element ***
  const emailInput = document.getElementById('email');
  // *** Converts to lowercase and trims for whitespace ***
  const emailInputValue = emailInput.value.trim().toLowerCase();

  // *** Classic email regex for validation ***
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // *** Check if the input is empty or invalid ***
  if (emailInputValue === '' || !emailRegex.test(emailInputValue)) {
    // *** Add error border class ***
    emailInput.classList.add('error-border');
    // *** Add error message class ***
    errorMessage.classList.add('error-message');

    // *** If the email is valid ***
  } else {
    // *** Remove error border class ***
    emailInput.classList.remove('error-border');
    // *** Remove error message class ***
    errorMessage.classList.remove('error-message');

    // *** My idea for fun 😂 ***
    // *** Delays the success alert by 250ms for a smoother user experience ***

    setTimeout(() => {
      alert(
        `Thank you! ${emailInputValue} has been successfully subscribed 😉`
      );
    }, 250);
  }
});
