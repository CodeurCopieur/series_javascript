class Tooltip {
  /**
   * Applique le système de bulle d'infos sur les éléments
   * @param {string} selector 
   */
  static bind(selector) {
    document.querySelectorAll(selector).forEach( elt => new Tooltip(elt))
  }
  /**
   * @param {HTMLElement} elt 
   */
  constructor(elt) {
    this.elt = elt
    this.title = elt.getAttribute('title')
    this.toolip = null
    this.elt.addEventListener('mouseover', this.mouseOver.bind(this))
    this.elt.addEventListener('mouseout', this.mouseOut.bind(this))
    // this est object qui va contenir elt, title, tootip
  }

  mouseOver() {
    let toolip = document.createElement('div')
    toolip.innerHTML = this.title
    document.body.appendChild(toolip)
    this.toolip = toolip
    // debugger log this
  }

  mouseOut() {
    if (this.toolip !== null) {
      document.body.removeChild(this.toolip)
    }
  }
}


/*
On sélectionne les éléments avec un attribut particulier (a[title])
Lorsque l'on survole un élément {
  On crée une <diV> dans le <body>
  On remplit la <div> avec le texte correspondant au titre
  On positionne la bulle au dessus de l'élément
  On ajoute une classe, pour animer l'apparition
}
Lorsque l'on quitte le survole {
  On retire une classe, pour animer la disparition
  Lorsque l'animation se termine {
    On supprime la <div> du <body>
  }
}
*/

Tooltip.bind('a[title]')