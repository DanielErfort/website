let movingObjectsHTML = '';

movingObjects.forEach((element) => {
  movingObjectsHTML += `
    <div class="moving-object" style="
      width: ${element.size.width}px;
      height: ${element.size.height}px;
      background: ${element.color};
      opacity: ${element.opacity}%;
      
      position: absolute;
      top: ${element.positionTop}%;
      transform: translateX(100%);
      transform: translateX(-10000px);
      transform: translateX(-10vw);
      
      --animation-duration: ${element.animation.duration}s;
      --translation-start: ${element.animation.translationStart}vw;
      --translation-end: ${element.animation.translationEnd}vw;
      --rotation-start: ${element.animation.rotationStart}deg;
      --rotation-end: ${element.animation.rotationEnd}deg;
      
      
      animation: slide-and-rotate var(--animation-duration) linear infinite;
      animation-delay: ${element.animation.delay}s;
    "></div>
  `

  const randomOpacity = Math.random();
  setTimeout(function() {
    element.style.opacity = 1;
  },100);

})


//opacity: ${element.opacity}%;
console.log(movingObjectsHTML);

document.querySelector('.js-movingObjects').innerHTML = movingObjectsHTML;

