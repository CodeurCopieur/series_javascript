const navLinks = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('section')];

let sectionPosition;

function posCalc() {
  sectionPosition = sections.map( section => section.offsetTop);
}

posCalc()

navLinks.forEach( link => link.addEventListener('click', addScrollSmooth))

function addScrollSmooth(e) {
  const linkIndex = navLinks.indexOf(e.target);
  
  window.scrollTo({
    top: sectionPosition[linkIndex],
    behavior: "smooth"
  })
}

window.addEventListener('resize', posCalc)