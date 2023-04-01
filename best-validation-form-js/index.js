const valForm = formSelect => {
  const formElt = document.querySelector(formSelect);

  const validSingleFormGroup = formGroup => {
    
  }

  formElt.setAttribute('novalidate', ''),
  formElt.addEventListener('submit', e => {
    e.preventDefault();
    validAllFormGroups(formElt)
  });
  
  const validAllFormGroups = formToValid => {
    const formGroups = Array.from(formToValid.querySelectorAll('.formGroup'));
    formGroups.forEach( formGroup => {
      validSingleFormGroup(formGroup)
    })
}
}

valForm('#registrationForm')