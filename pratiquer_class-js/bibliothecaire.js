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

  }
}

class Library {

}

const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('S'))