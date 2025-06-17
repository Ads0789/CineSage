
document.querySelector('.toggle-theme').addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
});

window.onload = () => {
  const typewriter = document.querySelector('.typewriter');
  const text = typewriter.textContent;
  typewriter.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
};

function openModal(title, desc) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('projectModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
