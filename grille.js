
// ouvrir la fenêtre de demande et récupération du nombre donné par l'utilisateur
let N;
let chaineligne="";
let chaine="";
let chaine2="";
let demander = true

while(demander){
  N = parseInt(prompt('Indiquez la taille de la grille (entre 1 et 70):'));
  demander = (N<1 || N> 70);
}


/* pour conserver l'input utilisateur dans l'historique
localStorage.setItem('nombre', N);*/

//rajout de la variable pour faire une boucle
for (let i=0; i<N; i++){chaineligne=chaineligne+"<carre>0</carre>";}
for (let i=0; i<N; i++){chaine=chaine+"<div>"+chaineligne+"</div>";}
chaine ="<div>" + chaine + "</div>";
document.getElementById('grille').innerHTML = chaine;


