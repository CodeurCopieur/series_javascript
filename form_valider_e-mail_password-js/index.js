//namespace shaker
var Shaker = (() => {
  var self = {};

  //Methode public car nous pouvons l'appeler de l'extérieur
  //Structure appeler le module parttern
  self.init = () => {
    console.log('test');

    const form = document.querySelector('form'),
          emailField = form.querySelector('.email-field'),
          emailInput = emailField.querySelector('.email'),
          passField = form.querySelector('.create-password'),
          passInput = passField.querySelector('.password'),
          cPassField = form.querySelector('.confirm-password'),
          cPassInput = cPassField.querySelector('.cPassword')

  }
    return self;
  })(); //closure qui s'appelle elle même ()
  
  Shaker.init();