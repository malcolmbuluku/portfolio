document.addEventListener('DOMContentLoaded', () => {
  console.log("Site loaded");

  document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  document.getElementById('loadMoreProjects').addEventListener('click', () => {
    const project = document.createElement('div');
    project.className = 'project-card ml';
    project.innerHTML = `
      <h3>New ML Project</h3>
      <p>New project loaded dynamically.</p>
    `;
    document.querySelector('#projects').appendChild(project);
  });
});

function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function sortProjects(order) {
  const container = document.querySelector('.projects');
  const cards = Array.from(container.children);
  cards.sort((a, b) => {
    const titleA = a.querySelector('h3').textContent.toLowerCase();
    const titleB = b.querySelector('h3').textContent.toLowerCase();
    return order === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });
  cards.forEach(card => container.appendChild(card));
}

function searchProjects() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'block' : 'none';
  });
}

document.getElementById('searchInput').addEventListener('keyup', searchProjects);
