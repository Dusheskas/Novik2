// Scroll To Block
$('a.scrollToBlock').on('click', function (event) {
   var $anchor = $(this);
   $('html, body')
      .stop()
      .animate({
         scrollTop: $($anchor.attr('href')).offset().top
      },
         {
            duration: 1200,
            specialEasing: {
               width: 'linear',
               height: 'easeInOutCubic',
            },
         }
      );
   event.preventDefault();
});


// On scroll animation
let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;


         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         }
         // Чтобы убрать анимацию при повторном скролле
         // else {
         // animItem.classList.remove('active');
         // }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }
   setTimeout(() => {
      animOnScroll();
   }, 200);
}

// Mobile Nav
const burgerOpen = document?.querySelector('[data-burgerOpen]');
const burgerClose = document?.querySelector('[data-burgerClose]');
const nav = document?.querySelector('[data-nav]');
const links = document.querySelectorAll('.nav__list-item');

links.forEach((element) => {
   element.addEventListener('click', () => {
      nav.classList.remove('nav--visible');
   });
});

burgerOpen?.addEventListener('click', () => {
   nav.classList.toggle('nav--visible');
});
burgerClose?.addEventListener('click', () => {
   nav.classList.toggle('nav--visible');
});


// Modal
const modalOpen = document.getElementById("modalOpen");
const modalContainer = document.getElementById("modalContainer");
const modalClose = document.getElementById("modalClose");

modalOpen.addEventListener('click', () => {
   modalContainer.classList.add('show');
});

modalClose.addEventListener('click', () => {
   modalContainer.classList.remove('show');
});
