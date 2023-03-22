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

    // Fonction d'appel sur la soumission du formulaire
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      checkEmail()
    })

  }
    return self;
  })(); //closure qui s'appelle elle même ()
  
  Shaker.init();