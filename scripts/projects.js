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
  <div class="poject-container transition-element-bottom">
    <div class="project-card">
      <div class="project-front">
        <img class="project-image" src="${project.image}" alt="Foodblog" loading="lazy">
        <p class="project-title">${project.title}</p>
      </div>
      
      <div class="project-back">
        <p class="project-text">${project.description}</p>
        <button class="button-project">Take a look!</button>
      </div>
    </div>
  </div>
  `
});

{/* <div class="project-container">
<div class="project-preview ">
  <img class="project-image " src="${project.image}">
  <p class="project-title">${project.title}</p>
</div>
<div class="project-description">
  <p>
    ${project.description}
  </p>
</div>
</div>  */}

projectsHTML += '<div class="projects-bottom-margin"></div>';

document.querySelector('.js-projects-content').innerHTML = projectsHTML;




