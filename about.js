document.addEventListener('DOMContentLoaded', function() {
  let logoBtn = document.getElementById('logoBtn');
  let sidebarFloatList = document.getElementById('sidebarFloatList');
  logoBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebarFloatList.classList.toggle('show');
  });
  document.addEventListener('click', function(e) {
    if (!sidebarFloatList.contains(e.target) && e.target !== logoBtn) {
      sidebarFloatList.classList.remove('show');
    }
  });
});
//手機
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
