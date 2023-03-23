//namespace shaker
var Shaker = (() => {
  var self = {};

  //Methode public car nous pouvons l'appeler de l'extérieur
  //Structure appeler le module parttern
  self.init = () => {

    const form = document.querySelector('form'),
          emailField = form.querySelector('.email-field'),
          emailInput = emailField.querySelector('.email'),
          passField = form.querySelector('.create-password'),
          passInput = passField.querySelector('.password'),
          cPassField = form.querySelector('.confirm-password'),
          cPassInput = cPassField.querySelector('.cPassword');
    
    // E-mail de validation
    function checkEmail() {
      const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

      if(!emailInput.value.match(emailPattern)){
        return emailField.classList.add('invalid')
      }

      // Suppression de la classe invalide si l'e-mail correspond à emailPattern
      emailField.classList.remove('invalid')
    }

    // masquer et afficher le mot de passe
    const eyeIcons = Array.from(document.querySelectorAll('.show-hide'));
    eyeIcons.forEach( icon => {
      icon.addEventListener('click', () => {
        const pInput = icon.parentElement.querySelector('input')
        if (pInput.type === "password") {
          icon.classList.replace('bx-hide', 'bx-show') // replace une class par une autre changer d'icone
          return pInput.type = "text"
        }

        icon.classList.replace('bx-show','bx-hide') // replace une class par une autre changer d'icone
        return pInput.type = "password"
      })
    })

    // Validation du mot de passe
    function createPass() {
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if(!passInput.value.match(passwordPattern)) {
        return passField.classList.add('invalid')
      }

      // Suppression de la classe invalide si le password correspond à passwordPattern
      passField.classList.remove('invalid')

    }

    // Confirmer la validation du mot de passe
    function confirmPass() {
      if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add('invalid')
      }

      cPassField.classList.remove('invalid')
    }

    // Fonction d'appel sur la soumission du formulaire
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      checkEmail()
      createPass()
      confirmPass()

      // calling  function on key up
      emailInput.addEventListener('keyup', checkEmail)
      passInput.addEventListener('keyup', createPass)
      cPassInput.addEventListener('keyup', confirmPass)


      if( !emailField.classList.contains('invalid') && !passField.classList.contains('invalid') && !cPassField.classList.contains('invalid')) {
        location.href = form.getAttribute('action')
      }
    })

  }
    return self;
  })(); //closure qui s'appelle elle même ()
  
  Shaker.init();