const sections = [...document.querySelectorAll('.content-section')];
const links = [...document.querySelectorAll('nav a')];
const content = document.querySelector('.content');

window.addEventListener('load', () => {
  // tableau d'offset de chaque section
  let data = sections.map(section => section.offsetTop );
  
  // Resize Observer
  const resizeObserver = new ResizeObserver(handleResize);
  resizeObserver.observe(content);

  let firstLoad = true;
  function handleResize() {
    if(!firstLoad) data = sections.map(section => section.offsetTop );
    firstLoad = false;
  }

  // Intersection Observer
  const intersectionObserver = new IntersectionObserver(startWatching, {rootMargin: "10% 0px"});
  intersectionObserver.observe(content);

  function startWatching(entries) {
    if(entries[0].isIntersecting) {
      window.addEventListener('scroll', handleScroll);
    } else if(!entries[0].isIntersecting) {
      const elToClean = links.find( link => link.className.includes('marked'));
      if (elToClean) {
        elToClean.classList.remove('marked');
      }
      saveIndex = undefined;
      window.removeEventListener('scroll', handleScroll);
    }
  }

  links.forEach( (link, i) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      window.scrollTo({
        top: data[i],
        behavior: "smooth"
      })
    })
  });

  // window.addEventListener('scroll', handleScroll);

  let saveIndex;
  function handleScroll() {
    const trigger = window.scrollY + (window.innerHeight/2);

   for (const i of data) {
    const index = data.indexOf(i);

    if( trigger >= data[index] && trigger < data[index+1]) {
      if(index !== saveIndex) {
        saveIndex = index;
        addClassAndClear(index)
      }
      break;
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