const navbar = document.querySelector('#topnav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  
  if (currentScrollTop > lastScrollTop) {
    navbar.classList.add('fade');


  } else {
    navbar.classList.remove('fade');

  }
  lastScrollTop = currentScrollTop;
});