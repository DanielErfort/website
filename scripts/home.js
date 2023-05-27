let movingObjectsHTML = '';

movingObjects.forEach((element) => {
  movingObjectsHTML += `
    <div style="
      width: ${element.size.width}px;
      height: ${element.size.height}px;
      background: ${element.color};
      opacity: ${element.opacity}%;


      position: absolute;
      top: ${element.positionTop}%;
      transform: translateX(100%);
      
      --animation-duration: ${element.animation.duration}s;
      --translation-start: ${element.animation.translationStart}vw;
      --translation-end: ${element.animation.translationEnd}vw;
      --rotation-start: ${element.animation.rotationStart}deg;
      --rotation-end: ${element.animation.rotationEnd}deg;
      
      
      animation: slide-and-rotate var(--animation-duration) linear infinite;
    "></div>
  `
})

console.log(movingObjectsHTML);

document.querySelector('.js-movingObjects').innerHTML = movingObjectsHTML;

