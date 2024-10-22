/*
 Korisnik unosi niz brojeva. Brojeve sortirati rastuće po poslednjoj cifri.
 U koliko dva broja imaju jednake poslednje cifre, redosled između njih nije bitan. 
   PRIMER: 12, 555, 437, 23, 87, 690, 222
   REZULTAT: 690, 222, 12, 23, 555, 87, 43
*/

/// Kreiranje elementa za export
const Zadatak2 = document.createElement("div")

/// Dohvatanje elemenata iz DOM-a
const inputElement2 = document.querySelector("#input-num")
const inputElement3 = document.querySelector("#input-array")
const spanArray = document.querySelector("#span-add")
const spanArange = document.querySelector("#span-arange")

/// inicijalizovanje praznog niza za kasnije pracenje unosa
let array = []


/// Eventovi

// Tastatura - input1, pojedinacni unos
inputElement2.addEventListener("keydown", (e)=>{
  console.log(e.code)
    if(inputElement2.value !== " " && e.code === "Enter" || inputElement2.value !== " " && e.code === "NumpadEnter") // provera uslova: nesto je upisano, i upisan je broj
    {
      const num = inputElement2.value.trim() // dohvatanje unete vrednosti iz inputa 1
      if(parseInt(num) !== Number(num)){  // provera da li je unet pojedinacan broj
        window.alert("Morate Uneti broj!") // alert ako nije
        inputElement2.value = "" // "brisanje" inputa1
      } else {
        array.push(num)  // u koliko je unet broj, dodaje se u niz za pracenje unosa
        spanArray.innerText = array // ispisujemo trenutno stanje u nizu
        inputElement2.value = "" // "brisanje" inputa1
        spanArange.innerText = "" // "brisanje", ispisa, ako postoji predhodno sortirani niz
      }
    }

});

// Mis - input2, visestruki unos
document.addEventListener("click",(e) => {
  const element = e.target
  const num = inputElement3.value  // dohvatanje unete vrednosti iz inputa 2 ( jedan string )
  const splitedComa = num.split(",")   // formiranje novog niza iz unetog stringa "podeljenog" po zarezu, ako je unet

  if(element.id === "btn-add-range"){
    
    if(num === ""){
      window.alert("Morate uneti vrednost!") // alert u koliko nije uneto nista
    } else {
      splitedComa.forEach(num1 => {  // prolaz kroz svaki element niza posle podele po zarezu,ako postoji
        if(num1.includes(" ")){      // provera da li novonastali strinovi imaju spejsove
          const splitedSpace = num1.split(" ") // u koliko ih imaju, novi niz podeljen po spejsovima ako postoje
          splitedSpace.forEach(num2 => {       // prolazak kroz svaki element novonastalog niza 
            const trim1 = num2.trim()       // trimovanje belina sa krajeva svih elemenata
            console.log("trimovano po spejsovima", Number(trim1))
            if(parseInt(trim1) !== Number(trim1)){ // provera da li je unet broj, tj da li je neki element mozda string
              window.alert("Greskom ste uneli "+" "+ trim1) // u koliko nije broj, alert da je pronadjen "uljez" i da se izbacuje
              inputElement3.value = "" // "brisanje" inputa2
            } else {
              array.push(Number(trim1)) // dodavanje brojeva u niz
            }
          })
        } else {
          const splitedSpace = num1.split(" ") // ako nije bilo podele po zarezu, grupisane stringove delimo po spejsu, ako postoji
          splitedSpace.forEach(num2 => { // prolazak kroz svaki element novog niza
            const trim1 = num2.trim()  // brisanje belina sa krajeva
            console.log("trimovano po zarezima", Number(trim1))
            if(parseInt(trim1) !== Number(trim1)){ // provera da li je unet broj, odnosno string
              window.alert("Greskom ste uneli "+" - "+ trim1+" - ") // u koliko nije broj, alert da je pronadjen "uljez" i da se izbacuje
              inputElement3.value = "" // "brisanje" inputa2
            } else {
              array.push(Number(trim1)) // dodavanje brojeva u niz
            }
          })
        }
        spanArray.innerText = array   // ispis stanja niza za pracenje unosa
        inputElement3.value = ""      // "brisanje" inputa2
        spanArange.innerText = ""     // brisanje prikaza predhodnih rezultata u koloko ih je bilo
      })
    }
  }
  if(element.id === "btn-arange"){  // dugme - kada je korisnik oducio da sortira unete vrednosti
    if(array.length < 2){
      window.alert("Morate uneti bar dva broja u niz!!")
    }
    for (let i=0; i<array.length-1;i++) {    // indeks broja prolazaka kroz niz
      for(let j=0; j<array.length-1; j++){   // indeks cifara koje se medjusobno porede ( susedne cifre j i j+1)
        let first = Number(array[j])
        let next = Number(array[j+1])
        //console.log(first,next)
        if(first%10<=next%10){      // deljenjem/modovanjem sa 10 dobijamo vrednost ostatka "jedinica". ako je prva cifra manja
        } else {
          array[j] = next
          array[j+1] = first            // zamena mesta susednim ciframa, manja vrednost ide na levu stranu
        }
      }
      spanArange.innerText = array    // ispis vrednosti sortiranog niza
    } 
    array = []    // resetovanje niza za pracenje unosa
  }
  if(element.id === "dell-enry"){
    array.pop()                       // brisanje poslednje unete cifre iz niza
    spanArray.innerText = array  
  }
  if(element.id === "reset-enry"){
    array = []                       // resetovanje niza za pracenje unosa
    spanArray.innerText = array  
  }
})


export default Zadatak2  // eksport elementa u index.js