const gridContainer = document.querySelector('.component__grid-container');
const intersectionWatcher = document.querySelector('.intersection-watcher');

const fetchData = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await result.json()
  
  return data
}
const addContent = async (nb) => {

  const arrayPost = await fetchData()

  arrayPost.forEach( post => {
    const card = document.createElement('div')
    card.className ="component__card"
    card.innerHTML = `<h2>${post.title}</h2>`
              
    gridContainer.appendChild(card)
  });

  // for (let index = 0; index < nb; index++) {
  //   const card = document.createElement('div')
  //   card.className ="component__card"
  //   card.innerHTML = `<h2>Lorem ipsum dolor sit amet</h2>`
              
  //   gridContainer.appendChild(card)
  // }
}




const handleIntersect = entries => {
  if (entries[0].isIntersecting) {
    addContent()
  }
}

const options = {
  // root: null,
  // threshold: 1,
  rootMargin: "-20px 0px"
}

new IntersectionObserver(handleIntersect, options).observe(intersectionWatcher)