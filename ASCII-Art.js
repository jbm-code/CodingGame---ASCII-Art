
const L = parseInt(readline());  // largeur d'une lettre
const H = parseInt(readline());  // hauteur d'une lettre
const T = readline().toUpperCase()         // texte


for (let i = 0; i < H; i++) {   // on boucle pour chaque niveau de hauteur ( hauteur = 5 )
    const ROW = readline()
    
    let line = ""
    for ( let j = 0; j < T.length; j++) {  // on boucle sur chaque lettre du mot
        var indexAscii = T.charCodeAt(j) -65  // on obtient l'index de chaque lettre en ASCII (avec un décalage de -65, à partir de la lettre A)
         //console.log(indexAscii)
        if ( indexAscii < 0 || indexAscii > 26) {  // si le caractere est special, on affiche le point d'interrogation index 26
            indexAscii = 26
        }
        line += ROW.substring(indexAscii*L, (indexAscii+1)*L)
}
console.log(line)


}
