const sections = [...document.querySelectorAll('.content-section')];
const links = [...document.querySelectorAll('nav a')];

window.addEventListener('load', () => {
  // tableau d'offset de chaque section
  const data = sections.map( (section) => section.offsetTop )
  console.log(data);

  links.forEach( (link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      window.scrollTo({
        top: data[i],
        behavior: "smooth"
      })
    })
  })
})