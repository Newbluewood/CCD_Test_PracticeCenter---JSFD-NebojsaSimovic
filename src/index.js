import Zadatak1 from "./modules/Task1.js"
import Zadatak2 from "./modules/Task2.js"
import Zadatak3 from "./modules/Task3.js"

const app1 = document.querySelector("#task1")
const app2 = document.querySelector("#task2")
const app3 = document.querySelector("#task3")

//////////

app1.append(Zadatak1)
app2.append(Zadatak2)
app3.append(Zadatak3)

//// Eventovi

document.addEventListener('click', (e)=>{
    const element = e.target
    if(element.id === "zd1"){
       showAndhide(element, 1)
    }
    if(element.id === "zd2"){
        showAndhide(element, 2)
    }
    if(element.id === "zd3"){
        showAndhide(element, 3)      
    }   
})


//// Fungcije

function showAndhide(element, no) {
  if(element.getAttribute("data-isVisible") === "on"){
    element.nextElementSibling.classList.remove("visible")
    element.nextElementSibling.classList.add("hiden")
    element.setAttribute("data-isVisible", "off")
    element.innerText = ` -- show -- Zadatak br ${no}: `

    // animacija
    document.getElementById(`task${no}`).animate(
      [
        // keyframes
        { height: "23vh", display: "flex", opacity:"0.2"},
        { height: "0vh" , display: "none", opacity:"0"},
      ],
      {
        // timing options
        duration: 500,
      }
    )
  } else {
    element.nextElementSibling.classList.remove("hiden")
    element.nextElementSibling.classList.add("visible")
    element.setAttribute("data-isVisible", "on")
    element.innerText = ` --- hide -- Zadatak br ${no}: `

    // animacija
    document.getElementById(`task${no}`).animate(
      [
        // keyframes
        {height: "0vh", display: "none", opacity:"0"},
        {height: "23vh" , display:"flex", opacity:"0.2"},
      ],
      {
        // timing options
        duration: 500,
      }
    )
  }

}