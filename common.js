
document.addEventListener('DOMContentLoaded', function () {
  let menuBtn = document.getElementById('menuBtn');
  let mobileMenu = document.getElementById('mobileMenu');
  let overlay = document.querySelector('.mobile-menu-overlay');

  let toggleMenu = (show) => {
    if (show) {
      mobileMenu.classList.add('show');
      overlay.classList.add('show');
      document.body.classList.add('no-scroll');
    } else {
      mobileMenu.classList.remove('show');
      overlay.classList.remove('show');
      document.body.classList.remove('no-scroll');
    }
  };

  menuBtn.addEventListener('click', () => {
    let isOpen = mobileMenu.classList.contains('show');
    toggleMenu(!isOpen);
  });

  document.addEventListener('click', (e) => {
    if (
      mobileMenu.classList.contains('show') &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu(false);
    }

    if (e.target.matches('.mobile-menu a')) {
      toggleMenu(false);
    }
  });

  overlay.addEventListener('click', () => {
    toggleMenu(false);
  });
});

