function moyenne(arrayNotes) {
  var sum = 0;
  for (const note of arrayNotes) {
    sum += note
  }

  return sum/arrayNotes.length;
}


class Student {
  ecole = 'Voillaume'
  _notes = []
  #secret = 'variable pas exposés'

  constructor (firstname, lastname) {
    this.firstname = firstname,
    this.lastname = lastname
  }

  // Setteur
  set notes(v) {

    if(Array.isArray(v))
      this._notes = v
  }
  // setNotes(notes) {
  //   this.notes = notes
  // }

  // getteur
  get name() {
    return this.firstname+' ' + this.lastname
  }

  canPass() {
    return moyenne(this._notes) >= Student.moyenne
  }

  static moyenne = 10
  
}


class SuperStudent extends Student {

  constructor (firstname, lastname, notes) {
    super(firstname, lastname)
    this._notes = notes
  }

  get name() {
    return 'Salut '+ super.name
  }

  canPass() {
    return super.canPass()
  }
}

const wid = new SuperStudent('Wid', 'Lou', [12, 10, 9])
const domi = new Student('Domi', 'Lou')
domi.notes = [15, 13, 17]
console.log(wid._notes, wid.canPass());