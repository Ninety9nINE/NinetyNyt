
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
    } else {
      sidebar.classList.remove('hide');
      sidebarLogo.classList.remove('active');
      sidebarFloatList.classList.remove('show');
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

