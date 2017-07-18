// mes variables.




var myImg = document.getElementById('monImage');
var tab = ["cactus.jpg", "montagne.jpg", "bateau.jpg"];
var count = 0;
var suivant = document.getElementById('boutonsuivant');
var pause = document.getElementById('boutonprecedent');

// ma fonction

 setInterval (function slide (){
   myImg.src = "img/" + tab[count];
   count++;
   if(count> (tab.length -1)){

     count = 0;
   }
 }, 2000);


 function btn () {

if ( suivant.onclick = slide());
count++;




 }

// mes boutons.
// Si j'appuie sur le bouton '' suivant ''  le compteur doit ajouté une images avec
// count++; il avance d'une image à chaque clique .
// Si j'appuie sur le bouton '' précédent '' avec un count--;  il revient en arrière
// d'une image a chaque clique .

//
