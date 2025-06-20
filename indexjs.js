
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const sidebarLogo = document.getElementById('sidebarLogo');
  const sidebarFloatList = document.getElementById('sidebarFloatList');
  const header = document.querySelector('.header');

  function checkSidebar() {
    const sidebarRect = sidebar.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
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
  const $items = $('.news-item');
  const $prev = $('.news-prev');
  const $next = $('.news-next');
  const pageSize = 4;
  let cur = 0;
  const totalPages = Math.ceil($items.length / pageSize);

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


document.querySelectorAll(".horizontal-scroll").forEach(scrollBox => {
      scrollBox.innerHTML += scrollBox.innerHTML; // 無縫複製內容
      scrollBox.addEventListener("mouseenter", () => scrollBox.classList.add("paused"));
      scrollBox.addEventListener("mouseleave", () => scrollBox.classList.remove("paused"));
    });