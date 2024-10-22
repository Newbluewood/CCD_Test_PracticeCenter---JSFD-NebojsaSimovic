 /* 
   Korisnik unosi rečenicu koja se sastoji od slova i brojeva. Prebrojati samoglasnike koji se nalaze ispred cifara.
   PRIMER: Danas1je2lep333dan44i555sunčano66je11 REZULTAT: 4
*/

/// Kreiranje elementa za export
const Zadatak1 = document.createElement("div") 

/// Dohvatanje elemenata iz DOM-a
const inputSentenceEl = document.querySelector("#sentence-input")
const spanRezultat = document.querySelector("#span-result")
const spanRecenica = document.querySelector("#span-sentence")

//// Eventovi

document.addEventListener("click", (e) => {
    const element = e.target
    let no = 0

    if(element.id === "btn1"){
      const unetaRecenica = inputSentenceEl.value.trim() // Dohvatanje vrednosti unete recenice
      const sentanceContainer = document.createElement("span") /// Dinamicki elemet - za prikaz koriscene recenice
      spanRecenica.innerText = ""

      // Trazimo - vokal/broj. Prolazimo kroz sve stringove u recenici.
      for ( let i=0; i<unetaRecenica.length; i++){
        const stringPlaceholder = document.createElement("span") /// Dinamicki elemet - za kasnije oznacavanje pronadjenog vokala, i ispis upotrebljene recenice
        let string = unetaRecenica[i]
        stringPlaceholder.innerText = string
            // Proveravanje uslova vokal/broj ( koristicemo funcije )
            if(!isThisIsNumber(string)){
              if(istThisIsVowel(string.toLowerCase())){
                let string2 = unetaRecenica[i+1]  /// Proveravamo da li je iza vokala broj
                if (isThisIsNumber(string2)){
                no++
                const mark = stringPlaceholder
                mark.style = "color: green; font-size: 22px; font-weight:bolder; text-decoration:underline" /// obelezavamo pronadjeni rezultat
              }
            }
          }
        sentanceContainer.appendChild(stringPlaceholder)
      } 
      spanRezultat.innerText = " " + no  /// prikazujemo rezultat
      spanRecenica.appendChild(sentanceContainer)  /// prikazujemo recenicu sa obelezenim vokalima
    } 
    inputSentenceEl.value = "" /// "ispraznimo" polje za unos teksta
  }   
)


//// Fungcije

export function isThisIsNumber(string) {
  if (parseInt(string) === Number(string) ){  /// provera da li je string broj? 
    return true
  }
  return false
}
function istThisIsVowel(string) {  // provera da li je string vokal ( samoglasnik )
  switch (string) {
    case "a": return true  
      break;
    case "e": return true  
      break;
    case "i": return true  
      break;
    case "o": return true  
      break;
    case "u": return true  
      break;
    default: false
      break;
  }
}

export default Zadatak1  /// eksport element u index.js ( ES6 - module)
