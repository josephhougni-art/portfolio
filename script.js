// Met en surbrillance l'onglet correspondant à la section visible
const tabs = document.querySelectorAll('.sheet-tabs .tab');
const sections = document.querySelectorAll('main .sheet');

const setActive = (id) => {
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
