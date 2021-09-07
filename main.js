//Je stock le bouton dans une variable en le récupérant par son id
let diceButton = document.getElementById('de-button');

//j'ajoute un écouteur d'évènemet sur le bouton
//Quand je click sur le bouton "deButton" alors le code dans la fonction s'exécute
diceButton.addEventListener('click', function () {
    //création d'un nombre aléatoire entre 1 et 6
    const rndInt = Math.floor(Math.random() * 6) + 1
    //J'attrape le dé qui correspond au nombre aléatoire préalablement crée
    let randomDice = document.getElementById('de-' + rndInt);
    //J'attrape les 6 dés d'un coup grâce à la classe "de". Les 6 dés sont stockés dans le tableau "everyDice"
    let everyDice = document.getElementsByClassName('de');

    //je parcours le tableau et pour chacun des dés je met un display none pour le faire disparaître
    for (let i = 0; i < everyDice.length; i++) {
        everyDice[i].style.display = 'none';
    }
    //A ce niveau tous les dés sont invisibles

    //Je fais apparaître uniquement le dé courrant "randomDice" qui a été obtenu aléatoirement
    randomDice.style.display = 'block';

});