/*
Za uneto n iscrtati sledeću figuru. U primeru je n=5

 ***** 
 ****+ 
 ***++ 
 **+++ 
 *++++ 
 +++++

*/

import { isThisIsNumber } from "./Task1.js" // uvoz - koriscenje fungcije koje sam pisao u prvom zadatku


 /// Kreiranje elementa za export
const Zadatak3 = document.createElement("div")

/// Dohvatanje elemenata iz DOM-a
const inputElement4 = document.querySelector("#input-col")
const divModel = document.querySelector("#div-show")

/// Eventovi
document.addEventListener("click", (e) => {
    const element = e.target

    if (element.id === "btn-showModel"){
        divModel.innerText = ""      // "brisanje" predhone slicice ako postoji

        const col = inputElement4.value.trim() // dohvatanje unete vrednosti iz inputa
        if (!isThisIsNumber(col)){  /// provera da li je unet broj i koriscenje predhodno napisane, uvezene funcije 
            window.alert("Morate Uneti broj!")
        }
        for (let i=0; i<=col; i++){     // niz ce se izvrsiti n+1 put, 0 do col,  odnosno col+1 redova
            const row = document.createElement("div") // dinamicki kreiramo kontejer za figuru
            for (let j=i; j<col; j++){  // broj kolona sa *, niz se izvrsava svaki put za -1 , opseg opada col-i
                const snow = document.createElement("span") // dinamicki kreiramo kontejer za znak * , svaki koji se napravi u ovom opsegu
                snow.innerText = " * " // upisujemo znak u njegov kontejner
                row.appendChild(snow) // upisujemo kreirane *
            }
            for (let k=0; k<i; k++){ // ostatak kolona do n se popunjava sa +, svaki put za +1 , opseg raste za 0 + i
                const plus = document.createElement("span") // dinamicki kreiramo kontejer za znak + , svaki koji se napravi u ovom opsegu
                plus.innerText = " + " // upisujemo znak u njegov kontejner
                row.appendChild(plus) // upisujemo/dopunjujemo kreirane * 
            }
            divModel.appendChild(row)  // kraj jednog reda, upisujemo ga u kontejner za figuru
        } 
    }
    inputElement4.value = ""
})


export default Zadatak3