class Rectangle {
  constructor(w, h) {

    if(w <= 0 || h <=0) {
      throw new Error('Forme avec des dimensions négatives(détails)')
    }

    this.w = w,
    this.h = h
  }

  get perimetre() {
    return (this.w + this.h) * 2
  }

  get isValid() {
    return this.w > 0 && this.h > 0
  }

  isBiggerThan(shape) {
    return this.perimetre > shape.perimetre
  }
}

class Square extends Rectangle{
  constructor(w){
    super(w, w)
  }
}

// avoir des erreurs avec détails

function promptRectangle() {
  try {
    // const r = new Rectangle(10, 20);
    // const r2 = new Rectangle(-10, 20);
  
    const w = parseInt(prompt('largeur'))
    const h = parseInt(prompt('hauteur'))
    const r = new Rectangle(w, h);
    console.log('Voici ton périmetre : ', r.perimetre);
  } catch (e) {
    throw new Error('Entrée Invalide(détails)', { cause: e})
  }
}

try {
  promptRectangle()
} catch (error) {
  console.log(error.message, {error});
}

// try {
//   // const r = new Rectangle(10, 20);
//   // const r2 = new Rectangle(-10, 20);

//   const w = parseInt(prompt('largeur'))
//   const h = parseInt(prompt('hauteur'))
//   const r = new Rectangle(w, h);
//   console.log(r.perimetre);
// } catch (e) {
//   console.log(e.message);
// }

// console.log('hello');


