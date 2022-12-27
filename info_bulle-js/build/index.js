'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  _createClass(Tooltip, null, [{
    key: 'bind',

    /**
     * Applique le système de bulle d'infos sur les éléments
     * @param {string} selector 
     */
    value: function bind(selector) {
      document.querySelectorAll(selector).forEach(function (elt) {
        return new Tooltip(elt);
      });
    }
    /**
     * @param {HTMLElement} elt 
     */

  }]);

  function Tooltip(elt) {
    _classCallCheck(this, Tooltip);

    this.elt = elt;
    this.title = elt.getAttribute('title');
    this.tooltip = null;
    this.elt.addEventListener('mouseover', this.mouseOver.bind(this));
    this.elt.addEventListener('mouseout', this.mouseOut.bind(this));
    // this est object qui va contenir elt, title, tootip
  }

  _createClass(Tooltip, [{
    key: 'mouseOver',
    value: function mouseOver() {
      var tooltip = this.createTooltip();
      var w = this.tooltip.offsetWidth;
      var h = this.tooltip.offsetHeight;
      var l = this.elt.offsetWidth / 2 - w / 2 + this.elt.getBoundingClientRect().left + document.documentElement.scrollLeft;
      var t = this.elt.getBoundingClientRect().top - h - 15 + document.documentElement.scrollTop;
      tooltip.style.left = l + "px";
      tooltip.style.top = t + "px";
      tooltip.classList.add('visible');
      // debugger 
      // log this
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var _this = this;

      if (this.tooltip !== null) {

        this.tooltip.classList.remove('visible');
        this.tooltip.addEventListener('transitionend', function () {
          document.body.removeChild(_this.tooltip);
          _this.tooltip = null;
        });
      }
    }

    /**
     * Créer et injecte la div dans le DOM
     * @returns {HTMLElement}
     */

  }, {
    key: 'createTooltip',
    value: function createTooltip() {
      if (this.tooltip === null) {
        var tooltip = document.createElement('div');
        tooltip.innerHTML = this.title;
        tooltip.classList.add('tooltip');
        document.body.appendChild(tooltip);
        this.tooltip = tooltip;
      }
      return this.tooltip;
    }
  }]);

  return Tooltip;
}();

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

Tooltip.bind('a[title]');