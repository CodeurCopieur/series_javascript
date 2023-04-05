const valForm = formSelect => {
  const formElt = document.querySelector(formSelect);

  const validationOptions = [
    {
      attribute: 'required',
      isValid: (input) => input.value.trim() !== '',
      errorMessage: (input, label) => `${label.textContent} est requis`
    }
  ]

  const validSingleFormGroup = formGroup => {
    const label = formGroup.querySelector('label');
    const input = formGroup.querySelector('input, textarea');
    const errorContainer = formGroup.querySelector('.error');
    const errorIcon = formGroup.querySelector('.error-icon');
    const successIcon = formGroup.querySelector('.success-icon');
    
    for(const option of validationOptions) {
      
      // l'input contient attribut required && qu'il n'est pas valid
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        // afficher le texte d'erreur dans l'élément html
        errorContainer.textContent = option.errorMessage(input, label)
        
      }
    }
  }

  formElt.setAttribute('novalidate', ''),
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