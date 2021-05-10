//exo 1
// let classe = ["agim", "adil", "ali", "mouna", "yassine", "elvis", "chris", "antoine", "jean", "fanny", "haroune", "ilias D","ilias E","lira","nasila","seif","stan","van hoa","nathan", "kevin" ];

// for (i in classe){
//     console.log("Bonjour" + " " + classe[i]);
// }

// //exo 2
// let nb1 = parseInt(prompt("Choisi un nombre"));
// for (let i = 0; i < nb1; i++){
//     console.log(i);
// }

// exo 3


// - Avec une boucle for affichez le nombre de tours de la boucle entre 0 et 20 
// - Affichez les chiffres et dites si c'est un nombre paire ou impaire
// consignes_2.md


 for (let i = 0; i < 21; i++){
     let calcul = (i%2 == 0) ? console.log(i + "even " +  calcul): console.log(i + " odd " +  calcul) ;  // permet de verifier si paire ou impaire automatiquement : conditions ternaires 
     
    }


// for (let i = 0; i < 21; i++){
//     if (i%2 == 0){
//         console.log(i + "even");
//     }else{
//         console.log(i + "odd");
//     }
// }


