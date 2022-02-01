const elements = {
    score: null, 
    answer: null, 
    choices: null
};

const init = () => {
    console.log('>> #init');

    // Attacher les éléments 
    elements.score = document.querySelector('#score');
    elements.answer = document.querySelector('#answer');
    elements.choices = document.querySelector('#choices');

    // Sélectionner un mot
    //      - créer mapping de mot
    // Générer les lettres pour les choix
    //      - créer mapping des choix
    // Afficher le mot 
    // Afficher les choix 
    // Afficher le score (nombre d'erreurs)
    // Ecouter les évènements 
    // Vérifier la lettre 
    //      - si pas dans le mot = ajouter au score
    //      - si dans le mot = afficher la lettre 
    //      - Fin de jeu : 
    //              - score max = perdu
    //              - toutes les lettres = gagné
};

window.addEventListener('load', () => {
    init();
})

// On peut aussi l'écrire : 
// window.onload = init; 

//window.addEventListener('load', init);

//window.onload = () => {
//    init();
//};