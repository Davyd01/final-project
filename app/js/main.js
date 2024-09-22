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

