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
    let tooltipTarget = elt.getAttribute('data-tooltip')
    if (tooltipTarget) {
      this.title = document.querySelector(tooltipTarget).innerHTML
    } else {
      this.title = elt.getAttribute('title')
    }
    
    this.tooltip = null
    this.elt.addEventListener('mouseover', this.mouseOver.bind(this))
    this.elt.addEventListener('mouseout', this.mouseOut.bind(this))
    // this est object qui va contenir elt, title, tootip
  }

  mouseOver() {
    let tooltip = this.createTooltip()
    let w = this.tooltip.offsetWidth
    let h = this.tooltip.offsetHeight
    let l = this.elt.offsetWidth / 2 - w / 2 + this.elt.getBoundingClientRect().left + document.documentElement.scrollLeft
    let t = this.elt.getBoundingClientRect().top - h - 15 + document.documentElement.scrollTop

    if(l < 20) {
      l = 20
    }

    tooltip.style.left = l+"px"
    tooltip.style.top = t+"px"
    tooltip.classList.add('visible')
    // debugger 
    // log this
  }

  mouseOut() {
    if (this.tooltip !== null) {
      
      this.tooltip.classList.remove('visible')
      this.tooltip.addEventListener('transitionend', ()=> {

        if (this.tooltip !== null)  {
          document.body.removeChild(this.tooltip)
          this.tooltip = null
        }
      })
      
    }
  }

  /**
   * Créer et injecte la div dans le DOM
   * @returns {HTMLElement}
   */
  createTooltip() {
    if(this.tooltip === null){
      let tooltip = document.createElement('div')
      tooltip.innerHTML = this.title
      tooltip.classList.add('tooltip')
      document.body.appendChild(tooltip)
      this.tooltip = tooltip
    }
    return this.tooltip
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