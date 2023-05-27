const objectsCount = 35;
let movingObjects = [];

for(let i = 1; i <= objectsCount; i++){
  const width = Math.random() * 80 + 20;
  const height = Math.random() * 80 + 20;
  const positionTop = Math.random() * 92;
  const opacity = Math.random() * 67; //max. opacity 67%
  const color = (Math.random()<0.5)? 'rgb(255, 64, 129)' : 'rgb(0, 188, 212)';
  const duration = Math.random() * 40 + 20; // Zufallszahl zwischen 20 und 60

  const translation = (Math.random() * 45 + 5);
  const translationStart = (Math.random()<0.5)? translation+100 : translation*-1;
  const translationEnd = translationStart * -1 + 100;

  const rotationStart = Math.random() * 45 * 40; // erste Zahl: 45°; zweite Zahl: Multiplikator (max 50)
  const rotationEnd = rotationStart * 2;

  movingObjects.push({
    size: {
      width,
      height,
    },
    color,
    opacity,
    positionTop,
    animation:{
      duration,
      translationStart,
      translationEnd,
      rotationStart,
      rotationEnd
    }
  })
}





