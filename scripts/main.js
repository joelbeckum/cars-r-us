import { CarsRUs } from "./CarsRUs.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderAllHTML()

document.addEventListener(
    "stateChanged",
    (event) => {
        console.log("State Change Alpha Team Force GOOOO!!!")
        renderAllHTML()
    }
)