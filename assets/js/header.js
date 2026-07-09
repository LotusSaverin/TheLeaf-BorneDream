document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.site-nav-toggle');
  var nav = document.getElementById('site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Optional: close nav when clicking a nav link (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
