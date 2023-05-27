//Die Weiten der Projekt-Beschreibungen werden erst nach dem Laden auf 40vw gesetzt. 
//Ansonsten kann möglicherweise auf der rechten Seite ein weißer Rand dargestellt werden
document.addEventListener('DOMContentLoaded', () => {
  const descriptions = document.querySelectorAll('.project-description');
  descriptions.forEach(description => {
    description.style.width = '40vw';
  });
});

let projectsHTML = '';

projects.forEach((project) => {
  projectsHTML += 
  `
  <div class="project-container">
    <div class="project-preview ">
      <img class="project-image " src="${project.image}">
      <p class="project-title">${project.title}</p>
    </div>
    <div class="project-description">
      <p>
        ${project.description}
      </p>
    </div>
  </div>
  `
});

projectsHTML += '<div class="projects-bottom-margin"></div>';

document.querySelector('.js-projects-content').innerHTML = projectsHTML;




