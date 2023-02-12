//namespace shaker
var Shaker = (() => {
  var self = {};

  //Methode public car nous pouvons l'appeler de l'extérieur
  //Structure appeler le module parttern
  self.init = () => {


    const searchInput = document.querySelector('#search')
    const searchResult = document.querySelector('.table-results')

    // console.log(searchInput, searchResult);

    let dataArray;

    async function getUsers() {

      res = await fetch("https://randomuser.me/api/?nat=fr&results=50")

      // destructuring afin d'atteindre la propriété results
      const {results} = await res.json()

      // dataArray va contenir un tableau trier(alpha)
      dataArray = orderList(results)
      
      // afin d'insérer chaque user dans le DOM
      createUserList(dataArray)
    }

    getUsers()

    function orderList(res) {

      const orderData = res.sort((a,b) => {
        if (a.name.last.toLowerCase() < b.name.last.toLowerCase())
          return -1;
        
        if (a.name.last.toLowerCase() > b.name.last.toLowerCase())
          return 1;
        
        return 0;
      })

      return orderData;
    }

    function createUserList(dataArray) {

      if (dataArray)  {

        for (const key in dataArray) {
          const element = dataArray[key];

          let template = `<tr>
                <td>${dataArray[key].name.last} ${dataArray[key].name.first}</td>
                <td>${dataArray[key].email}</td>
                <td>${dataArray[key].phone}</td>
              </tr>`;

              searchResult.insertAdjacentHTML('beforeend', template);

        }
      }
    }

    searchInput.addEventListener('input', filterData)

    function filterData(e) {
      searchResult.innerHTML = ""

      const { target } = e

      const valueSearch = target.value.toLowerCase().replace(/\s/g, "")
      const filteredArr = dataArray.filter( el => 
        el.name.last.toLowerCase().includes(valueSearch) || 
        el.name.first.toLowerCase().includes(valueSearch) ||
        `${el.name.last + el.name.first}`.toLowerCase().replace(/\s/g, "").includes(valueSearch) ||
        `${el.name.first + el.name.last}`.toLowerCase().replace(/\s/g, "").includes(valueSearch) 
        )

      createUserList(filteredArr)
    }

  }
  return self;
})(); //closure qui s'appelle elle même ()


Shaker.init();