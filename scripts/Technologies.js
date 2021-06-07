import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"

    const listItems = technologies.map(tech => {
        return `<li>
            <input type="radio" name="technology" value="${tech.id}" /> ${tech.package}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}