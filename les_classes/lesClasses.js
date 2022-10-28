function moyenne(arrayNotes) {
  var sum = 0;
  for (const note of arrayNotes) {
    sum += note
  }

  return sum/arrayNotes.length;
}


class Student {
  ecole = 'Voillaume'

  constructor (firstname, lastname) {
    this.firstname = firstname,
    this.lastname = lastname
  }

  setNotes(notes) {
    this.notes = notes
  }

  canPass() {
    return moyenne(this.notes) >= 10
  }
}

const wid = new Student('Wid', 'Lou')
const domi = new Student('Domi', 'Lou')
wid.setNotes([10, 10, 8])
domi.setNotes([15, 13, 17])
console.log(wid.canPass(), domi.canPass());