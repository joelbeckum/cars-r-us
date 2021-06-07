import { PaintColors } from "./PaintColors.js"
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>
        
        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Paint Color</h2>
                ${PaintColors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
            <section class="choices__technologies options">
                <h2>Technology</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>
    `
}