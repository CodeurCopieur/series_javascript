
// Annuler une rêquete http quand on a déjà une reponse
const a = new AbortController()

Promise.race([
  fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=2000', 
  {signal: a.signal}),
  fetch('https://jsonplaceholder.typicode.com/users/?_limit=3', 
  {signal: a.signal})
]).then( r => r.json()).then( body => {
  a.abort()
  console.log(body);
})
//   
/*
    Promise.race([
      fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5&_delay=2000'),
      fetch('https://jsonplaceholder.typicode.com/users/?_limit=3')
    ]).then( r => r.json()).then( console.log)
   */
  //  Method POST
  /*
    async function fetchUsers() {
      const r = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',    
        headers: {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({title: 'Mon premier'})
      })
      console.log(r.headers, r.headers.get('Content-Type'));
      if(r.ok === true) {
        return r.json()
      }

      throw new Error('Impossible de contacter le serveur !')
    }

    fetchUsers().then( users => console.log(users))
  */
  //  Method GET
  /*
    async function fetchUsers() {
      const r = await fetch('https://jsonplaceholder.typicode.com/users/', {
        method: 'GET',    
        headers: {
              "Accept" : "appliccation/json"
            }
      })
      if(r.ok === true) {
        return r.json()
      }

      throw new Error('Impossible de contacter le serveur !')
    }

    fetchUsers().then( users => console.log(users))
  */

  // reponse en format json
  /*
    .then( r => r.json())
    .then( body =>  console.log(body))
  */
  // reponse en format text
  /*
    .then( r => r.text())
    .then( body =>  console.log(body))
  */
  // .then( r => {console.log(r, r.status === 200 ? 'oui' : 'non')})