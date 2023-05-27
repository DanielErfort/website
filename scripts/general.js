document.addEventListener("DOMContentLoaded", function() {
  showElementIfInViewport();
});

window.addEventListener('scroll', () => {
  showElementIfInViewport();
});

function showElementIfInViewport(){
  let elements = document.querySelectorAll('.transition-element-left, .transition-element-bottom, .transition-element-right, .transition-element-up, .transition-element-static');
  elements.forEach((element, index) => {
    if (!element.classList.contains('show') && isElementInViewport(element)) {
      setTimeout(() => {
        element.classList.add('show');
      }, /*index**/300); 
    }
  });
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  const scrollPosition = window.innerHeight + window.pageYOffset //Gesamtgröße des Fensters + Aktueller Scroll-Offset
  console.log(scrollPosition +' '+ element.offsetTop )
  return (
    //scrollPosition >= rect.top ||  scrollPosition >= rect.bottom 

    scrollPosition-200 >= element.offsetTop


   // rect.top >= 0 //&&
   // rect.left >= 0 &&
   // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) //&&
   // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function navigateToAnchor(anchor) {
  const targetElement = document.querySelector(anchor);
  if (targetElement) {
    const offset = targetElement.offsetTop + 1; // Hier wird der Offset von 2 Pixeln hinzugefügt
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
}