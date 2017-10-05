
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
}, 1000);

function PopupCenter(w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    
}

