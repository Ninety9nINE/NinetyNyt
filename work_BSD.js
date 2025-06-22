document.addEventListener('DOMContentLoaded', function() {
  const logoBtn = document.getElementById('logoBtn');
  const sidebarFloatList = document.getElementById('sidebarFloatList');
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

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const imagesToShow = 4; // 一次顯示幾張圖
  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * (100 / imagesToShow)}%)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - imagesToShow) {
      currentIndex++;
      updateCarousel();
    }
  });

  // 放大預覽功能
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');

  images.forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.add('active');
      modalImg.src = img.src;
    });
  });
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImg.src = '';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modalImg.src = '';
    }
  });

  updateCarousel();
});

//手機
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.querySelector('.mobile-menu-overlay');

  const toggleMenu = (show) => {
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
    const isOpen = mobileMenu.classList.contains('show');
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