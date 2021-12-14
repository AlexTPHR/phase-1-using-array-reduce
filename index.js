const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = (accumulator, currentValue) => {
    let total = 0
    const batteries = () => {
        let totalBatteries = 0
        totalBatteries = currentValue
        return total += totalBatteries
}
        return accumulator + currentValue;
}
let totalBatteries = batteryBatches.reduce(reducer,0)