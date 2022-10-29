function sortedStudents(arr){
  console.log(arr[0].notes.reduce((acc, cur) => acc + cur) / arr[0].notes.length);

  return arr.sort((a, b) => {
    return (
      b.notes.reduce((acc, cur) => acc + cur) / b.notes.length - 
      a.notes.reduce((acc, cur) => acc + cur) / a.notes.length
    )
  })
}


console.log(sortedStudents([
  {name: "eleve1", notes: [10, 12, 15, 13, 9]}, 
  {name: "eleve2", notes: [9, 12, 8, 13, 10]}, 
  {name: "eleve3", notes: [10, 8, 15, 7, 9]}, 
  {name: "eleve4", notes: [19, 12, 15, 14, 13]}
]));
