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
  console.log(optionsArr);

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
  // ajouter un événement de clic à l'élément sélectionné pour basculer le menu déroulant
  const menu = document.createElement('div');
  menu.classList.add('dropdown__menu');
  customDropdown.appendChild(menu);
  selected.addEventListener('click', () => console.log('oui'));
  // toggleDropdown.bind(menu)

  // créer un élément d'entrée de recherche
  // ajouter une class, un type et placeholder à cet élément et l'ajouter à l'élément de menu

  const search = document.createElement('input');
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
    const item = document.createElement('div');
    item.className = 'dropdown__menu_item';
    item.dataset.value = option.value;
    item.textContent = option.textContent;
    menuItemsWrapper.appendChild(item);

    item.addEventListener('click', () => console.log('oui'));
    //setSelected.bind(item, selected, dropdown, menu)
  });

  // ajouter la class sélectionnée à la première option personnalisée
  menuItemsWrapper.querySelector('div').className = 'selected';
}