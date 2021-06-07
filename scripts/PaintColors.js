import { getPaintColors, setPaintColor } from "./database.js"

const paintColors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paintColor") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

export const PaintColors = () => {
    let html = "<ul>"

    const listItems = paintColors.map(paintColor => {
        return `<li>
            <input type="radio" name="paintColor" value="${paintColor.id}" /> ${paintColor.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}