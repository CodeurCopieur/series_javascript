const wrapper = document.querySelector('#lastPosts');
const loader = document.createElement('img')
loader.className = "mx-auto"
loader.id = "imgLoader"
loader.src = './loader.gif'
wrapper.append(loader)

/**
 * Créer un élèment HTML représentant un article
 * @param {{title: string, body: string}} post 
 * @return {HTMLElement}
 */
function createArticle(post) {
  const article = `
    <article class="bg-white shadow-lg cursor-pointer">
      <a href="#" title="Mon titre test 1">
        <img src="./01.jpg" alt="" class="">
        <div class="p-4">
          <div class="flex flex-col mb-5">
            <h3 class="text-2xl text-gray-700">${post.title}</h3>
            <p class="mt-1 ml-auto text-lg font-medium text-gray-900">${post.body}</p>
          </div>
          <span title="Mon titre test 1" class="inline-flex items-center px-5 py-1 shadow-sm font-medium bg-red-600">
            <span class="text-gray-100 text-lg">Buy</span>
          </span>
        </div>
      </a>
    </article>
  `
  return article
}

async function main(params) {
  try {
    const r = await fetch ('https://jsonplaceholder.typicode.com/users/1/posts', {
      method: 'GET',
      headers: {
        Accept : "application/json"
      }
    })

    if(!r.ok) {
      throw new Error('Erreur serveur')
    }

    const posts = await r.json()
    loader.remove()
    for (let post of posts) {
      wrapper.insertAdjacentHTML('beforeend', createArticle(post))
    }

  } catch (error) {
    loader.src = './loader-black.gif'
    loader.className = 'border-4 border-red-600'
    console.log(error.message, {error});
    return
  }
}

main()
