class Rectangle {
  constructor(w, h) {
    this.w = w,
    this.h = h
  }

  get perimetre() {
    return (this.w + this.h) * 2
  }

  get isValid() {
    return this.w > 0 && this.h > 0
  }
}

const r = new Rectangle(10, 20);
console.log(r.perimetre);
console.log(r.isValid);
const r2 = new Rectangle(-10, 20);
console.log(r2.perimetre);
console.log(r2.isValid);