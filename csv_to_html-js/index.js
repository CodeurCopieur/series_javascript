(function() {
  // lecteur de fichiers + éléments html
  var reader = new FileReader(),
  picker = document.getElementById('picker'),
  table = document.getElementById('table')

  // lire csv sur le choix du fichier
  
  picker.onchange = () => reader.readAsText(picker.files[0]);

  // lire le fichier csv et générer du html
  reader.onloadend = () => {
  // fichier csv entier
  let csv = reader.result;

  // efface le tableau html
  table.innerHTML="";

  // divisé en lignes
  let rows = csv.split("\r\n");

    // parcourir les lignes + diviser les colonnes
    for (let row of rows) {
    let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
      if (cols != null) {
        let tr = table.insertRow();
        for (let col of cols) {
          let td = tr.insertCell();
          td.innerHTML = col.replace(/(^"|"$)/g, "")
        }
      }
    }
  }
}());
  
