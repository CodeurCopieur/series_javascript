// obtenir des listes déroulantes et un formulaire
const dropdowns = document.querySelectorAll('[data-dropdown]');
const form = document.querySelector('form');
console.log(dropdowns, form);

// vérifie si la listes déroulantes existent sur la page
if(dropdowns.length) {

  // parcourir les listes déroulantes et créer une liste déroulante personnalisée pour chaque élément sélectionné

  dropdowns.forEach( dropdown => {
    createCustomDrompdown(dropdown);
  });
}

// vérifier si le formulaire existent sur la page
if(form !== null) {
  // lorsque le formulaire est soumis, log   la valeur des champs sélectionnés
  form.addEventListener('submit', e => {
    e.preventDefault();

    const select = form.elements['club'];
    const valueSelect = select.options[select.selectedIndex].value;
    console.log(valueSelect);
  })
}

// créer une liste déroulante personnalisée

function createCustomDrompdown(dropdown) {
  // obtenir toutes les options et les convertir de nodelist en tableau
  const options = dropdown.querySelectorAll('option');
  const optionsArr = Array.prototype.slice.call(options);

  // créer un élément de liste déroulante personnalisé et y ajouter une liste déroulante de classe
  //insérez-le dans le DOM après le champ de sélection

  const customDropdown = document.createElement('div');
  customDropdown.className = 'dropdown';
  dropdown.insertAdjacentElement('afterend', customDropdown);

  // créer un élément pour l'option sélectionnée
  // ajouter une classe à cet élément, le texte de la première option dans le champ de sélection et l'ajouter à la liste déroulante personnalisée  
  const selected = document.createElement('div');
  selected.className = 'dropdown__selected';
  selected.textContent = optionsArr[0].textContent;
  customDropdown.appendChild(selected);

  // créer un élément pour le menu déroulant, y ajouter une classe et l'ajouter à la liste déroulante personnalisée ->  (va contenir un input et un wrapper d'items(dropdown__menu_items) > (dropdown__menu_item))
  const menu = document.createElement('div');
  menu.classList.add('dropdown__menu');
  customDropdown.appendChild(menu);

  // ajouter un événement de clic à l'élément sélectionné pour basculer le menu déroulant
  selected.addEventListener('click', toggleDropdown.bind(menu));

  // créer un élément d'entrée de recherche
  const search = document.createElement('input');

  // ajouter une class, un type et placeholder à cet élément et l'ajouter à l'élément de menu
  search.placeholder = 'search...';
  search.type = 'text';
  search.className = 'dropdown__menu_search';
  menu.appendChild(search);

  // créer un élément wrapper(<div class="dropdown__menu_items"></div>) pour les éléments de menu, y ajouter une classe ajouter à l'élément de menu (va contenir les items <div class="dropdown__menu_item" data-value="">Sélectioner un club</div>)
  const menuItemsWrapper = document.createElement('div');
  menuItemsWrapper.className = 'dropdown__menu_items';
  menu.appendChild(menuItemsWrapper);

  // parcourir toutes les options et créer une option personnalisée pour chaque option et l'ajouter à l'élément wrapper des éléments
  optionsArr.forEach( option => {
    var item = document.createElement('div');
    item.className = 'dropdown__menu_item';
    item.dataset.value = option.value;
    item.textContent = option.textContent;
    menuItemsWrapper.appendChild(item);

    item.addEventListener('click', setSelected.bind(item, selected, dropdown, menu));
  });

  // ajouter la class sélectionnée à la première option personnalisée
  menuItemsWrapper.querySelector('div').className += ' selected';

  // ajouter un événement d'entrée pour rechercher un élément d'entrée pour filtrer les éléments
  search.addEventListener('input', filterItems.bind(search, optionsArr, menu));

  // ajouter un événement de clic à l'élément de document pour fermer la liste déroulante personnalisée si vous cliquez en dehors de celui-ci
  document.addEventListener('click', closeIfClickedOutside.bind(customDropdown, menu));

  // masquer la liste déroulante d'origine (sélectionner)
  dropdown.style.display = 'none';

}

// Toggle dropdown
function toggleDropdown() {
  console.log(this.offsetParent);
  // vérifiez si la liste déroulante est ouverte et si elle est fermée, sinon ouvrez-la et focus sur l'input de recherche
  if (this.offsetParent !== null) {
    this.style.display = 'none';
  } else {
    this.style.display = 'block';
    this.querySelector('input').focus();
  }

}

// définir l'option sélectionnée
function setSelected(selected, dropdown, menu) {
  // obtenir la valeur et l'étiquette de l'option personnalisée cliquée
  var value = this.dataset.value;
  var label = this.textContent;

  // modifier le texte sur l'élément sélectionné
  selected.textContent = label;
  // changer la valeur sur le champ sélectionné
  dropdown.value = value;

  // fermer le menu
  menu.style.display = 'none';
  // réinitialiser la valeur d'entrée de la recherche
  menu.querySelector('input').value = '';
  // supprimer la classe sélectionnée de l'option précédemment sélectionnée et afficher toutes les divs si elles ont été filtrées
  menu.querySelectorAll('div').forEach( div => {
    if(div.classList.contains('selected')) {
      div.classList.remove('selected');
    }

    if(div.offsetParent === null) {
      div.style.display = 'block';
    }
  })
  // ajouter la classe sélectionnée à l'option cliquée
  this.className += ' selected';
}

// filtrer les éléments
function filterItems(itemArray, menu) {
  console.log(this.value);
  // obtenir toutes les options personnalisées
  const customOptions = menu.querySelectorAll('.dropdown__menu_items div');
  // obtenir la valeur de recherche et  convertir tous les caractères minuscules
  const value = this.value.toLowerCase();
  // obtenir des éléments filtrés
  const filteredItems = itemArray.filter( item => item.value.toLowerCase().includes(value));
  // obtenir les index des éléments filtrés
  const indexesArray = filteredItems.map( item => itemArray.indexOf(item));

  itemArray.forEach( option => {
    if( !indexesArray.includes(itemArray.indexOf(option)) ) {
      customOptions[itemArray.indexOf(option)].style.display = 'none';
    } else {
      if(customOptions[itemArray.indexOf(option)].offsetParent === null) {
        customOptions[itemArray.indexOf(option)].style.display = 'block';
      }
    }
  })
}

// Fermer la liste déroulante si cliqué en dehors de l'élément déroulant
function closeIfClickedOutside(menu, e) {
  if( e.target.closest('.dropdown') === null && e.target !== this && menu.offsetParent !== null ) {
    menu.style.display = 'none';
  }
}