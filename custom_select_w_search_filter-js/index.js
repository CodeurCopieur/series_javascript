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
}