//                                              PART ONE

// assignment parameters
const minPlantArea = 0.8                                // meters squared
const pi = 3.1415

// calc garden area
const gardenRadius = 5
const gardenArea = pi * (gardenRadius ** 2)
console.log(`garden area: ${(gardenArea).toFixed(2)} square meters ${'\n'}`)         // meters squared

//              how many plants grow over X weeks
function calcPlantGrowth (numWeeks, startNumPlants) {   // I literally could not figure out how to get this calculation right without using a function-- I don't know, the
                                                        // math-oriented part of this javascript homework has proven rather challenging for me.
    
    for (let i = 0; i < numWeeks; i++) {

        startNumPlants = startNumPlants * 2             // could add 'rate of growth' parameter instead of hard coding the '* 2'

    }

    return startNumPlants
}

//              check if plants need to be pruned/monitored/planted after X weeks
function growthStatus (numWeeks, startNumPlants) {

    let endNumPlants = calcPlantGrowth(numWeeks, startNumPlants)
    let plantsInGarden = minPlantArea * endNumPlants

    if (plantsInGarden < (gardenArea * 0.5)) {
        return `We still have room to plant! We have ${endNumPlants} plants, occupying ${plantsInGarden} meters squared`
    } else if ((plantsInGarden >= (gardenArea * 0.5)) && (plantsInGarden <= (gardenArea * 0.8))) {
        return `We should monitor plant growth closely to ensure they do not exceed garden capacity. We have ${endNumPlants} plants,
        occupying ${plantsInGarden} square meters, which takes up roughly ${((plantsInGarden / gardenArea) * 100).toFixed()}% of our garden capacity.`
    } else {
        return `We need to do some pruning! We have ${endNumPlants} plants, occupying ${plantsInGarden} meters squared,
        which takes up roughly ${((plantsInGarden / gardenArea) * 100).toFixed()}% of our garden capacity!`
    }
}

const checkWeek1 = console.log(growthStatus(1, 20) + '\n')
const checkWeek2 = console.log(growthStatus(2, 20) + '\n')
const checkWeek3 = console.log(growthStatus(3, 20) + '\n')
const checkWeek4 = console.log(growthStatus(4, 20) + '\n')
const checkWeek5 = console.log(growthStatus(5, 20) + '\n')
const checkWeek6 = console.log(growthStatus(6, 20) + '\n')
const checkWeek7 = console.log(growthStatus(7, 20))















/* Part 2: Thinking Bigger
The conservation area in which the garden is located has multiple other gardens. 
Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden?
Part 3: Errors in Judgement
The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message. */