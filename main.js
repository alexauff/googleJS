
let monBouton = document.querySelector('button');

// je cache mes éléments
document.getElementById('corps').style.display='none';

// au clic je veux que le block apparaisse
monBouton.onclick = function() {
document.getElementById('corps').style.display='flex';
}


