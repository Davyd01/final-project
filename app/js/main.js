(function (){
  const headerBurgerOpen = document.querySelector('.header__burger');
  const burgerNavigation = document.querySelector('.header__nav');
  const headerBurgerClose = document.querySelector('.header__nav-close');

  headerBurgerOpen.addEventListener('click', event => (
    burgerNavigation.classList.add('active')
  ))

  headerBurgerClose.addEventListener('click', event => (
    burgerNavigation.classList.remove('active')
  ))
})();

(function () {
  const tabItems = document.querySelectorAll('.expirience__tab-link');
  const tabContent = document.querySelectorAll('.expirience__content-item');

  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();

      tabContent.forEach(content => {
        content.classList.remove('active');
      });
      tabItems.forEach(tab => {
        tab.classList.remove('active');
      });

      tabContent[index].classList.add('active');
      tabItems[index].classList.add('active');
    })
  })
})();


// (function () {
//   const tabItems = document.querySelectorAll('.expirience__tab-link');
//   const tabContent = document.querySelectorAll('.expirience__content-item');

//   tabItems.forEach((tab, index) => {
//     tab.addEventListener('click', (event) => {
//       event.preventDefault();

//       // Удаляем класс 'active' у всех элементов контента
//       tabContent.forEach(content => {
//         content.classList.remove('active');
//       });

//       // Удаляем класс 'active' у всех вкладок
//       tabItems.forEach(tab => {
//         tab.classList.remove('active'); // Здесь ошибка была
//       });

//       // Добавляем класс 'active' выбранной вкладке и соответствующему контенту
//       tabContent[index].classList.add('active');
//       tabItems[index].classList.add('active');
//     });
//   });
// })();


const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  speed: 900,
  effect: "cube",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },




});

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   spaceBetween: 30,
//   grabCursor: true,
//   speed: 900,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true, // Точки пагинации будут кликабельными
//   },
// });



const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const sendButton = document.getElementById('send-btn');


sendButton.addEventListener('click', (e) => {
  e.preventDefault()


  const nameValue = nameInput.value.trim();
  const messageValue = messageInput.value.trim();
  const phoneValue = phoneInput.value.trim()
  const emailValue = emailInput.value.trim()
  


  if (validateName(nameValue)) {
    console.log(`Name is valid: "${nameValue}"`)
  } else {
    console.log('Name is invalid: the field is required.')
  }


  if (validateMessage(messageValue)) {
    console.log(`Message is valid: "${messageValue}"`)
  } else {
    console.log('Message is invalid: it must contain at least 5 characters.')
  }


  if (validatePhone(phoneValue)) {
    console.log(`Phone number is valid: "${phoneValue}"`)
  } else {
    console.log('Phone number is invalid: it must start with +380 and have 9 digits.');
  }


  if (validateEmail(emailValue)) {
    console.log(`Email is valid: "${emailValue}"`);
  } else {
    console.log('Email is invalid: it must contain "@" and a ".".');
  }


})



function validateName(nameValue) {
  const errorLabelForName = nameInput.nextElementSibling

  if (nameValue.trim() === '') {
    errorLabelForName.textContent = 'Name is required'
    errorLabelForName.style.color = 'red'
    return false
  } else {
    errorLabelForName.textContent = ''
    return true
  }
}




function validateMessage(messageValue) {
  const errorLabelforMessage = messageInput.nextElementSibling

  if (messageValue.trim().length <= 5) {
    errorLabelforMessage.textContent = 'Message must be at least 5 characters.';
    errorLabelforMessage.style.color = 'red'
    return false
  } else {
    errorLabelforMessage.textContent = ''
    return true
  }
}




function validatePhone(phoneValue) {
  const errorLabelforPhone = phoneInput.nextElementSibling


  const phonePattern = /^\+380\d{9}$/


  if (!phonePattern.test(phoneValue) ) {
    errorLabelforPhone.textContent = 'Phone number must start with +380 and contain 9 digits'
    errorLabelforPhone.style.color = 'red'
    return false
  } else {
    errorLabelforPhone.textContent = ''
    return true
  }
}



function validateEmail(emailValue) {
  const errorLabelforEmail = emailInput.nextElementSibling

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


  if (!emailPattern.test(emailValue)) {
    errorLabelforEmail.textContent = 'Email must contain "@" and a ".".';
    errorLabelforEmail.style.color = 'red'
    return false
  } else {
    errorLabelforEmail.textContent = ''
return true 
  }
}