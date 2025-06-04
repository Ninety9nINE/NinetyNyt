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