///*Envoie une requête GET à l'URL de l'api pour récupérer des données*/
fetch("chocolatier.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    addProducts(data)
  });
    // Appelle la fonction addProducts() avec les données JSON en entrée
    function addProducts(data){
  // Affiche les données dans la console du navigateur
  let realisations = "";
    data.realisations.forEach((p) => {
      realisations += 
      `<section  class="card">
      <img src="${p.image}"/>
      <h1>${p.nom}</h1>
      <p>${p.description}</p>
     
      </section>`;
    });

    //j'ajoute mes choclats dans la div produits : 
    document.querySelector("#produits").innerHTML+=realisations

 let temoignages = "t";
    data.temoignages.forEach((t) => {
      temoignages += `<li> ${t.typePrestation} ${t.commentaire} ${t.note} ${t.prenom} </li>`;
    });
     
}