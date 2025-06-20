document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio page loaded');

  document.getElementById('loadMoreProjects').addEventListener('click', loadMoreProjects);

  document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});

function loadMoreProjects() {
  const newProject = document.createElement('div');
  newProject.className = 'project web';
  newProject.innerHTML = '<h4>New Web Project</h4><p>Description of a new project dynamically added.</p>';
  document.querySelector('.portfolio-projects').appendChild(newProject);
}

function filterProjects(category) {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

function sortProjects(order) {
  const container = document.querySelector('.portfolio-projects');
  const projects = Array.from(container.querySelectorAll('.project'));

  projects.sort((a, b) => {
    const titleA = a.querySelector('h4').textContent.toLowerCase();
    const titleB = b.querySelector('h4').textContent.toLowerCase();
    return order === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
  });

  projects.forEach(project => container.appendChild(project));
}

function searchProjects() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const title = project.querySelector('h4').textContent.toLowerCase();
    const desc = project.querySelector('p').textContent.toLowerCase();
    project.style.display = title.includes(input) || desc.includes(input) ? 'block' : 'none';
  });
}
