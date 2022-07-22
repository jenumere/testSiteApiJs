function getArticle(id, texteItemListe) {
  // Création d'une chaine sans espace
  //https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/
  texteItemListeSansEspace = texteItemListe.split(' ').join('');
  // Appel à l'API et affichage de l'article
  enAttente(texteItemListeSansEspace);
  // Enlève la mise en forme du lien actif (s'il existe)
  const itemListeActif = document.querySelector('.item_liste_actif');
  if (itemListeActif !== null) {
    itemListeActif.classList.toggle('item_liste_actif');
  }
  // Active la mise en forme du lien courant
  document.getElementById(id).classList.toggle('item_liste_actif');
}

async function enAttente(texteItemListeSansEspace) {
  // Creation de l'adresse de l'API
  const adresseApi =
    'http://divcreatexp.fr/test/test_page_js_api/api.php?article=' +
    texteItemListeSansEspace;
  // Appel API
  const reponseJSON = await fetch(adresseApi);
  const reponseJS = await reponseJSON.json();
  const article = document.querySelector('.article');
  // Modification de code HTML de l'article
  article.innerHTML = `<p>${reponseJS.data}</p>`;
}
