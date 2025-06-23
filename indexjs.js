
document.addEventListener('DOMContentLoaded', function() {
  let sidebar = document.getElementById('sidebar');
  let sidebarLogo = document.getElementById('sidebarLogo');
  let sidebarFloatList = document.getElementById('sidebarFloatList');
  let header = document.querySelector('.header');

  function checkSidebar() {
    let sidebarRect = sidebar.getBoundingClientRect();
    let headerRect = header.getBoundingClientRect();
    // sidebar底部 
    if (sidebarRect.bottom >= headerRect.bottom) {
      sidebar.classList.add('hide');
      sidebarLogo.classList.add('active');
             // LOGO 縮小
    sidebarLogo.classList.add('small');
    } else {
      sidebar.classList.remove('hide');
      sidebarLogo.classList.remove('active');
      sidebarFloatList.classList.remove('show');
             // LOGO 回ㄈ 副
    sidebarLogo.classList.remove('small');
    }
  }

  window.addEventListener('scroll', checkSidebar);

  sidebarLogo.addEventListener('click', function() {
    if (sidebarLogo.classList.contains('active')) {
      sidebarFloatList.classList.toggle('show');
    }
  });

  // 點擊其他地方關閉選單
  document.addEventListener('click', function(e) {
    if (!sidebarLogo.contains(e.target) && !sidebarFloatList.contains(e.target)) {
      sidebarFloatList.classList.remove('show');
    }
  });
});

$(function() {
  let $items = $('.news-item');
  let $prev = $('.news-prev');
  let $next = $('.news-next');
  let pageSize = 4;
  let cur = 0;
  let totalPages = Math.ceil($items.length / pageSize);

  function showPage(page) {
    if (page < 0) page = 0;
    if (page >= totalPages) page = totalPages - 1;

    $items.hide();
    $items.slice(page * pageSize, (page + 1) * pageSize).fadeIn();

    $prev.prop('disabled', page === 0);
    $next.prop('disabled', page === totalPages - 1);
    cur = page;
  }

  if ($items.length > 0) {
    showPage(0);
    $prev.on('click', () => showPage(cur - 1));
    $next.on('click', () => showPage(cur + 1));
  }
});

//跑馬
if (window.innerWidth >= 768) {
  document.querySelectorAll(".horizontal-scroll").forEach(scrollBox => {
    scrollBox.innerHTML += scrollBox.innerHTML+= scrollBox.innerHTML;
    scrollBox.addEventListener("mouseenter", () => scrollBox.classList.add("paused"));
    scrollBox.addEventListener("mouseleave", () => scrollBox.classList.remove("paused"));
  });
}


    // 分頁
let dots = document.querySelectorAll('.news-page-dots .dot');
let totalPages = dots.length;
let currentPage = 0; // 從0開始

function setActiveDot() {
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentPage);
    });
}

document.querySelector('.news-prev').addEventListener('click', () => {
    if(currentPage > 0) {
        currentPage--;
        setActiveDot();
    }
});
document.querySelector('.news-next').addEventListener('click', () => {
    if(currentPage < totalPages - 1) {
        currentPage++;
        setActiveDot();
    }
});

// 初始化
setActiveDot();

//手機功能
  let menuBtn = document.getElementById('menuBtn');
  let mobileMenu = document.getElementById('mobileMenu');
  let overlay = document.querySelector('.mobile-menu-overlay');

if (!overlay) {
  overlay = document.createElement('div');
  overlay.classList.add('mobile-menu-overlay');
  document.body.appendChild(overlay);
}

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