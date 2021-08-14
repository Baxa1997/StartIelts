const navMenu = document.querySelector('.nav__menu'),
      navBtn = document.querySelector('.nav__toggle'),
      navClose = document.querySelector('.nav__close'),
      navLink = document.querySelectorAll('.nav__link');
      
      
      navBtn.addEventListener('click', () => {
         navMenu.classList.add('show'); 
      });
      navClose.addEventListener('click', () => {
          navMenu.classList.remove('show');
      });
      function closeMenu() {
          navMenu.classList.remove('show');
      }
      
      navLink.forEach(btn => btn.addEventListener('click', closeMenu));
      
      function scrollHeader() {
          const header = document.querySelector('.header');
          
          if (this.scrollY >= 100) {
              header.classList.add('scroll-header');
          } else if (this.scrollY < 100) header.classList.remove('scroll-header');
      }
      window.addEventListener('scroll', scrollHeader);
      
      