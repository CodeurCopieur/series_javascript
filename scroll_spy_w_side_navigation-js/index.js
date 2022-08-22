const sections = [...document.querySelectorAll('.content-section')];
const links = [...document.querySelectorAll('nav a')];

window.addEventListener('load', () => {
  // tableau d'offset de chaque section
  const data = sections.map( (section) => section.offsetTop );
  console.log(data);

  links.forEach( (link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      window.scrollTo({
        top: data[i],
        behavior: "smooth"
      })
    })
  });

  window.addEventListener('scroll', handleScroll);

  let saveIndex;
  function handleScroll() {
    const trigger = window.scrollY + (window.innerHeight/2);

   for (const i of data) {
    const index = data.indexOf(i);

    if( trigger >= data[index] && trigger < data[index+1]) {
      if(index !== saveIndex) {
        saveIndex = index;
        addClassAndClear(index)
        break;
      }
    }

    if( index === data.length - 1 && trigger >= data[index]) {
      if(index !== saveIndex) {
        saveIndex = index;
        addClassAndClear(index)
      }
    }
   }
  }

  function addClassAndClear(index) {
    const elToClean = links.find( link => link.className.includes('marked'));

    if (elToClean) {
      elToClean.classList.remove('marked');
    }

    links[index].classList.add('marked');
  }
})