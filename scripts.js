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
      <a class="cliquer" href="https://www.patrickroger.com/en" clique ici>
      ACHETER <i class="fa-solid fa-cookie-bite"></i>
      
    </a>
     
      </section>`;
    });

    //j'ajoute mes choclats dans la div produits : 
    document.querySelector("#produits").innerHTML+=realisations

 let temoignages = "";
    data.temoignages.forEach((t) => {
      temoignages += `<section class="card1">
      <h1>${t.prenom}</h1>
      <h3>${t.typePrestation}</h3> 
      <p>${t.commentaire}</p>
      <h4>${avis(t.note)}</h4>
        </section>`;
     
    });
      document.querySelector("#temoignage").innerHTML+=temoignages


let bene = "";

data.listeBenefficesClients.forEach(element => {
  bene+= `<nav class="card2">
<p>${element}</p>
</nav>
`
});

document.querySelector("#listeBenefficesClients").innerHTML+=bene

}

var map = L.map('map').setView([45.439695, 4.3871779], 13);
        artoDB_DarkMatterNoLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);
L.marker([34.5553 , 69.2075 ]).addTo(map)
.bindPopup("<h1>kabaul </h1><p>kabul Ak13 </p>")
.openPopup();5


function avis(note){
  let chaine=""
  for (let i=1; i<=note; i++){
  chaine+="★"
  }
 
  for(let j=0; j<5-note;j++){
    chaine+="☆"
  }
  return chaine
}