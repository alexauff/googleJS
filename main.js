
let monBouton = document.querySelector('button');

// Créer un lien avec l'objet bouton
let monBoutonSearch = document.querySelector('#rech');

// Texte de recherche
let monUrl;

// je cache mes éléments
document.getElementById('corps').style.display='none';

// au clic je veux que le block apparaisse
monBouton.onclick = function() {
document.getElementById('corps').style.display='flex';
};


// si clique sur bouton recherche google
monBoutonSearch.onclick = function() {

// récupérer le texte tapé
monUrl = document.getElementById("search").value;

// changer l'adresse de l url
window.location.href="https://www.google.fr/search?q=" + monUrl;

};

setTimeout(function() {
alert('Hey le site est trop bien! Viens dessus stp please')
}, 10000);

    
}

