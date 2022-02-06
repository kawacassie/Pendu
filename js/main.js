const elements = {
    score: null, 
    answer: null, 
    choices: null
};

const words = [
    "COURONNE",
    "LUMIERES",
    "CHEMINEE",
    "FOULARD",
    "TELEPHONE",
    "POISSON", 
    "DRAPEAU"
];

let choices = [];
let word = "";
let wordMapping = [];
let choicesMapping = [];

const init = () => {
    //console.log('>> #init');

    // Attacher les éléments 
    elements.score = document.querySelector('#score');
    elements.answer = document.querySelector('#answer');
    elements.choices = document.querySelector('#choices');

    // Sélectionner un mot
    word = pickWord();
    //console.log("word", word);

    //      - créer mapping de mot

    // Générer les lettres pour les choix
    choices = generateChoices();
    //console.log(choices);

    //      - créer mapping des choix
    choicesMapping = getChoicesMapping(choices);
    console.log(choicesMapping);

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

const generateChoices = () => {
    const choices = [];
    for(let index = 65; index <= 90; index++) {
        choices.push(String.fromCharCode(index));
    }
    return choices;
};

const getChoicesMapping = (choices) => {
    const choicesMapping = choices.map((letter) => {
        return {
            letter,
            isChosen: false
        };
    });
    return choicesMapping;
};

const pickWord = () => {
    const randomIndex = getRandomInt(0, words.length -1);
    return words[randomIndex];
};

window.addEventListener('load', () => {
    init();
});

// On peut aussi l'écrire : 
// window.onload = init; 

//window.addEventListener('load', init);

//window.onload = () => {
//    init();
//};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min; 
};