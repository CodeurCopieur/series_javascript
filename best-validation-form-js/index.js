const valForm = formSelect => {
  const formElt = document.querySelector(formSelect);

  const validationOptions = [
    {
      attribute: 'minlength',
      isValid: (input) => input.value && input.value.length >= parseInt(input.minLength, 10),
      errorMessage: (input, label) => `Il faut au moins ${input.minLength} lettres pour votre ${label.textContent.toLowerCase()}`
    },
    {
      attribute: 'custommaxlength',
      isValid: (input) => input.value && input.value.length <= parseInt(input.getAttribute('custommaxlength'), 10),
      errorMessage: (input, label) => `Il doit être inférieur à ${input.getAttribute('custommaxlength')} lettres pour votre ${label.textContent.toLowerCase()}`
    },
    {
      attribute: 'match',
      isValid: (input) => {
        const matchSelector = input.getAttribute('match');
        const matchedElement = document.querySelector(`#${matchSelector}`)

        return matchedElement && matchedElement.value.trim() === input.value.trim()
      },
      errorMessage: (input, label) => {
        const matchSelector = input.getAttribute('match');
        const matchedElement = document.querySelector(`#${matchSelector}`)

        const matchLabel = matchedElement.parentElement.parentElement.querySelector('label');

        return `${label.textContent} devrait correspondre à ${matchLabel.textContent.toLowerCase()}`
      }
    },
    {
      attribute: 'pattern',
      isValid: (input) => {
        const patternRegex = new RegExp(input.pattern);

        return patternRegex.test(input.value)
      },
      errorMessage: (input, label) => `pas valide ${label.textContent}`,
    },
    {
      attribute: 'required',
      isValid: (input) => input.value.trim() !== '',
      errorMessage: (input, label) => `${label.textContent} est requis`,
    },
  ]

  const validSingleFormGroup = formGroup => {
    const label = formGroup.querySelector('label');
    const input = formGroup.querySelector('input, textarea');
    const errorContainer = formGroup.querySelector('.error');
    const errorIcon = formGroup.querySelector('.error-icon');
    const successIcon = formGroup.querySelector('.success-icon');
    
    let formGroupError = false;
    for(const option of validationOptions) {
      
      // l'input contient attribut required && qu'il n'est pas valid
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        // afficher le texte d'erreur dans l'élément html
        errorContainer.textContent = option.errorMessage(input, label);
        // ajouter ou supprimer des classes
        input.classList.add('border-red-700');
        input.classList.remove('border-green-700');
        successIcon.classList.add('hidden');
        errorIcon.classList.remove('hidden');
        formGroupError = true;
      }
    }

    // si tout est bon
    if (!formGroupError) {
      errorContainer.textContent = '';
      input.classList.add('border-green-700');
      input.classList.remove('border-red-700');
      successIcon.classList.remove('hidden');
      errorIcon.classList.add('hidden');
    }
  }

  formElt.setAttribute('novalidate', '');
  Array.from(formElt.elements).forEach(element => {
    element.addEventListener('blur', event => {
      validSingleFormGroup(event.srcElement.parentElement.parentElement)
    })
  })
  formElt.addEventListener('submit', e => {
    e.preventDefault();
    validAllFormGroups(formElt)
  });
  
  const validAllFormGroups = formToValid => {
    // on recherche tous les container qui ont la classe '.formGroup'
    const formGroups = Array.from(formToValid.querySelectorAll('.formGroup'));
     // on parse tous les formGroups trouvé et pour chacun on lance la fonction validSingleFormGroup
    formGroups.forEach( formGroup => {
      validSingleFormGroup(formGroup)
    })
}
}

valForm('#registrationForm')