var arrayShifumi = ['pierre','papier','ciseaux'];
var caseWin = [['pierre','ciseaux'],['papier','pierre'],['ciseaux','papier']];
var caseLose = [['pierre','papier'],['papier','ciseaux'],['ciseaux','pierre']];
var choice = null;
//Application des évènements aux choix
$('#stone').click(function(){
  choice = 'pierre';
})
$('#paper').click(function(){
  choice = 'papier';
})
$('#cissor').click(function(){
  choice = 'ciseaux';
})
//Gestion du bouton Shifumi
$('#shifumi').click(function(){
  var duel = [];
  //Définition du choix de l'ordinateur au hasard
  var randomShifumi = Math.ceil(Math.random()*3);
  //remplissage de la liste de comparaison
  duel.push(choice,arrayShifumi[randomShifumi-1]);
  //Traitement des cas en fonction des tableaux
  //cas ou pas de choix
  if (choice == null ){
    $('#result').text('Pas de choix.');
    //cas d'égalité
  } else if(duel[0]==duel[1]) {
    $('#result').css('background-color','lightblue');
    $('#result').css('color','black');
    $('#result').text('Egalité ! Joueur : '+duel[0]+' vs. Ordinateur : '+duel[1]+'.')
  } else {
    //gestion des cas en parcourant la liste de victoire/défaite possible
    for(i=0;i<arrayShifumi.length;i++){
        if(duel.toString()==caseWin[i].toString()){
          $('#result').css('background-color','lightgreen');
          $('#result').css('color','black');
          $('#result').text('Gagné ! Joueur : '+duel[0]+' vs. Ordinateur : '+duel[1]+'.');
        }
        if(duel.toString()==caseLose[i].toString()){
          $('#result').css('background-color','red');
          $('#result').css('color','white');
          $('#result').text('Perdu ! Joueur : '+duel[0]+' vs. Ordinateur : '+duel[1]+'.');
        }
    }
  }
})
