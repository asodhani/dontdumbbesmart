(function (window, document) {
  var html = document.documentElement;
  html.classList.remove('no-js');
  html.classList.add('js');
  var scrollToTop = document.getElementById('scroll-to-top');
  if (!scrollToTop) return;
  window.addEventListener('scroll', function () {
    scrollToTop.style.bottom = window.scrollY > 500 ? '20px' : '-2000px';
  });
  scrollToTop.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})(window, document);
