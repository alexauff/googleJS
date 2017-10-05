
// ouvrir la fenêtre de demande et récupération du nombre donné par l'utilisateur
let N; 
let chaineligne="";
let chaine="";
N = parseInt(prompt('Indiquez la taille de la grille (entre 1 et 70):'));


/* pour conserver l'input utilisateur dans l'historique 
localStorage.setItem('nombre', N);*/

//rajout de la variable pour faire une boucle
for (let i=0; i<N; i++){chaineligne=chaineligne+"<carre></carre>";}
for (let i=0; i<N; i++){chaine=chaine+"<div>"+chaineligne+"</div>";}
chaine ="<div><div>" + chaine + "</div></div>";
document.getElementById('grille').innerHTML =chaine;


