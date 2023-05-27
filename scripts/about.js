/*function downloadResume() {
    var link = document.querySelector('.resume-button a');
    link.click();
  }*/

let toolsHTML = '';

tools.forEach((tool) => {
  toolsHTML += 
  `
  <div class="tool-container">
    <img class="tool-image transition-element-bottom" src="${tool.image}">
    <p class="tool-text">${tool.title}</p>
  </div>
  `
});

document.querySelector('.js-tools').innerHTML = toolsHTML;


  function downloadResume() {
    var link = document.createElement('a');
    link.href = 'files/Resume_Daniel Erfort.pdf';
    link.download = 'Resume_Daniel Erfort.pdf';
    link.click();
  }

