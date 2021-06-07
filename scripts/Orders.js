import { getOrders, getPaintColors, getInteriors, getTechnologies, getWheels } from "./database.js"

const buildOrderListItem = (order) => {
    const paintColors = getPaintColors()
    const interiors = getInteriors()
    const technologies = getTechnologies()
    const wheels = getWheels()

    let totalCost = 0

    const foundColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )
    totalCost += foundColor.price

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost += foundInterior.price

    const foundTech = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    totalCost += foundTech.price

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )
    totalCost += foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} was placed on ${new Date(order.timestamp).toLocaleDateString()} for a total cost of ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}