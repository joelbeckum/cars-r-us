const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 700 },
        { id: 2, color: "Midnight Blue", price: 850 },
        { id: 3, color: "Firebrick Red", price: 925 },
        {id: 4, color: "Spring Green", price: 685 }
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 925.25 },
        { id: 2, material: "Charcoal Fabric", price: 975.25 },
        { id: 3, material: "White Leather", price: 1300.75 },
        { id: 4, material: "Black Leather", price: 1300.75 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 1155.00 },
        { id: 2, package: "Navigation Package", price: 1750.25 },
        { id: 3, package: "Visibility Package", price: 1534.65 },
        { id: 4, package: "Ultra Package", price: 2100.50 }
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 1100.00 },
        { id: 2, type: "17-inch Pair Radial Black", price: 1250.50 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 1325.46 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 1475.50 }
    ],
    orders: [
        { id: 1, paintColorId: 1, interiorId: 1, technologyId: 1, wheelsId: 1, timestamp: 1614659931681}
    ],
    orderBuilder: {
        
    }
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const setPaintColor = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}


export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1
    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}