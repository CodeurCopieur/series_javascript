const students = [
  {
      name: 'John',
      notes: [1, 20, 18, 19, 12]
  },
  {
      name: 'Jane',
      notes: [17, 18, 20, 13, 15]
  },
  {
      name: 'Sophie',
      notes: [17, 12, 14, 15, 13]
  },
  {
      name: 'Marc',
      notes: [2, 3, 5, 8, 9]
  },
  {
      name: 'Manon',
      notes: [18, 17, 18, 19, 12]
  }
]

console.log(students);

function moyenne(arrayNotes) {
  var sum = 0;
  for (const note of arrayNotes) {
    sum += note
  }

  return sum/arrayNotes.length;
}

function compareStudents(a, b) {
  return b.moyenne - a.moyenne;
}

for (const student of students) {
  notes = student.notes;
  student.moyenne = moyenne(notes);
  student.best= Math.max(...notes)
  student.worst= Math.min(...notes)
}

students.sort(compareStudents)

console.log('1: ' + formStudent(students[0]), 
'- 2: ' + formStudent(students[1]),
'- 3: ' + formStudent(students[2]));

function formStudent(student) {
  return student.name + ' avc une moyenne de ' + student.moyenne+ '. Meilleur note: ' + student.best + ' et Pire note: ' + student.worst ;
}