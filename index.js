// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let hq = 42
    if (street > hq) {
        return street - hq 
    } else if(street < hq) {
        return hq - street 
    }
}

function distanceFromHqInFeet(street) {
  let blocks = distanceFromHqInBlocks(street) 
  return blocks * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock > endBlock) {
        return (startBlock - endBlock) * 264 
    } else if(startBlock < endBlock) {
        return (endBlock - startBlock) * 264 
    }
}

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock)
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 2 / 100 
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
}