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
    // 分頁
document.addEventListener('DOMContentLoaded', function() {
  // 1. 參數設定
  const pageSize = 8; // 每頁要幾個作品
  const items = document.querySelectorAll('.gallery-item');
  const totalPages = Math.ceil(items.length / pageSize);

  // 2. 動態生成 dots
  const dotsContainer = document.querySelector('.gallery-pagination .dots');
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dotsContainer.appendChild(dot);
  }
  const dots = document.querySelectorAll('.gallery-pagination .dot');

  let currentPage = 0;

  // 3. 換頁顯示作品
  function renderPage(page) {
    items.forEach((item, idx) => {
      if (idx >= page * pageSize && idx < (page + 1) * pageSize) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === page);
    });
  }

  // 4. 綁定事件
  document.querySelector('.page-btn.prev').addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  document.querySelector('.page-btn.next').addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentPage = idx;
      renderPage(currentPage);
    });
  });

  // 5. 頁面初始化
  renderPage(currentPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const fadeDuration = 320; // 和 transition 秒數一致(毫秒)

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 1. 切換 active 樣式
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 2. 取得按鈕的分類
      const filter = btn.dataset.filter;

      // 3. 顯示對應卡片
galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hide');
          // 讓動畫觸發
          item.style.opacity = 0;
          item.style.transform = 'translateY(32px) scale(0.96)';
          // 等待一下再淡入
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0) scale(1)';
          }, 20);
        } else {
          item.classList.add('hide');
          // 直接隱藏，不動畫淡出
        }
      });
    });
  });
});
// menu
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


