const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

if (window.labIdentity) {
  const labFields = {
    '[data-lab-name]': window.labIdentity.name,
    '[data-lab-tagline]': window.labIdentity.tagline,
    '[data-lab-description]': window.labIdentity.description
  };

  Object.entries(labFields).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  });
}
