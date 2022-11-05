class Book {

  #page = 1

  constructor(title, pages) {
    this.title = title,
    this.pages = pages
  }

  get page() {
    return this.#page
  }

  nextPage() {
    if(this.#page < this.pages) {
      return this.#page++
    }
  }

  close() {
    this.#page = 1
  }
}


const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)


class Library {

  #books = []

  addBook(book) {
    this.#books.push(book)
  }

  addBooks(books) {
    // for (let book of books) {
    //   this.addBook(book)
    // }

    books.forEach(this.addBook, this)

  }

  findBooksByLetter(letter) {
    // const found = []
    // for (let book of this.#books) {
    //   if (book.title[0].toLowerCase() === letter.toLowerCase()) {
    //     found.push(book)
    //   }
    // }

    // return found

    return this.#books.filter( function(book) {
      return book.title[0].toLowerCase() === letter.toLowerCase()
    })
  }
}

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('S'),l)