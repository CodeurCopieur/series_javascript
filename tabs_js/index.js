const tabs = [...document.querySelectorAll('.tab')]
const tabsContent = [...document.querySelectorAll('.tab-content')];

console.log(tabs, tabsContent);

tabs.forEach( tab => tab.addEventListener('click', tabsAnimation));

function tabsAnimation(e) {

  // index du bouton qui contient la classe "active-tab"
  const indexToRemove = tabs.findIndex( tab => tab.classList.contains('active-tab'));

  // supprimer les classes "active-tab" & "active-tab-content" w/ indexToRemove
  tabs[indexToRemove].classList.remove('active-tab');
  tabsContent[indexToRemove].classList.remove('active-tab-content');

  // index du bouton qui été cliqué
  const indexToShow = tabs.indexOf(e.target);
  
  // ajouter les classes "active-tab" & "active-tab-content" w/ indexToShow
  tabs[indexToShow].classList.add('active-tab');
  tabsContent[indexToShow].classList.add('active-tab-content');
}