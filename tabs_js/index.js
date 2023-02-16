const tabs = [...document.querySelectorAll('.tab')]
const tabsContent = [...document.querySelectorAll('.tab-content')];

tabs.forEach( tab => tab.addEventListener('click', tabsAnimation));

function tabsAnimation(e) {

  // index du bouton qui contient la classe "active-tab"
  const indexToRemove = tabs.findIndex( tab => tab.classList.contains('active-tab'));

  // Accésibilité attribut aria-selected & tabindex
  tabs[indexToRemove].setAttribute("aria-selected", "false");
  tabs[indexToRemove].setAttribute("tabindex", "-1");
  tabsContent[indexToRemove].setAttribute("aria-selected", "false");
  tabsContent[indexToRemove].setAttribute("tabindex", "-1");

  // supprimer les classes "active-tab" & "active-tab-content" w/ indexToRemove
  tabs[indexToRemove].classList.remove('active-tab');
  tabsContent[indexToRemove].classList.remove('active-tab-content');

  // index du bouton qui été cliqué
  const indexToShow = tabs.indexOf(e.target);

  // Accésibilité attribut aria-selected & tabindex
  tabs[indexToShow].setAttribute("aria-selected", "true");
  tabs[indexToShow].setAttribute("tabindex", "0");
  tabsContent[indexToShow].setAttribute("aria-selected", "true");
  tabsContent[indexToShow].setAttribute("tabindex", "0");

  // ajouter les classes "active-tab" & "active-tab-content" w/ indexToShow
  tabs[indexToShow].classList.add('active-tab');
  tabsContent[indexToShow].classList.add('active-tab-content');
}

tabs.forEach( tab => tab.addEventListener('keydown', arrowNavigation));

let tabFocus = 0;
function arrowNavigation(e) {

  //  Droite ou Gauche  
  if (e.keyCode === 39 || e.keyCode === 37) {
    tabs[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === 39) {
      tabFocus++;

      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      } 

    } else if (e.keyCode === 37) {
      tabFocus--;

      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      } 
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  } 
}