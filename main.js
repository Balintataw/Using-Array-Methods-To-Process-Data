// answer 1 ============================================

function avgPrice(arr) {
    var total = arr.reduce((prev, curr) => ({price: prev.price + curr.price}))
    return total.price / arr.length
}

document.getElementById('answer1').innerHTML = `The average price is ${avgPrice(items).toFixed(2)}`;

//answer 2 ============================================

var htmlStr2 = '';

function costRange(arr) {
    return arr.filter(item => {
        if (item.price > 14 && item.price < 18) {
            return item
        }
    }).map(elem => elem.title)
}

costRange(items).forEach((item, i) => htmlStr2 += `${item}\n`);

document.getElementById('answer2').innerHTML = htmlStr2;

//answer 3 =============================================

var htmlStr3 = '';

function gbp(arr) {
    return arr.filter(item => item.currency_code === "GBP")
}

var htmlStr3 = `${gbp(items)[0].title} ${gbp(items)[0].price.toFixed(2)}`;

document.getElementById('answer3').innerHTML = htmlStr3;

//answer 4 ==============================================

var htmlStr4 = '';

function woody(arr) {
    return arr.filter(item => {
        if (item.materials.includes('wood')) {
            return item
        }
    })
}

(woody(items)).forEach(item => {
    htmlStr4 += `${item.title} is made of wood\n`
})

document.getElementById('answer4').innerHTML = htmlStr4;

//answer 5 =============================================

var htmlStr5 = '';

//helper for mats list
function arrToList(array) {
    var listStr = ''
    array.forEach(item => listStr += `${item}\n`)
    return listStr;
}

// (function matAmountAboveEight(arr) {
//     return arr.filter(item => {
//         if (item.materials.length >= 8) {
//             return item
//         }
//     })
// }(items).forEach(elem => htmlStr5 += `${elem.title} has ${elem.materials.length} materials:\n${arrToList(elem.materials)}\n`));

function matAmountAboveEight(arr) {
    return arr.filter(item => {
        if (item.materials.length >= 8) {
            return item
        }
    })
}

matAmountAboveEight(items).forEach(elem => htmlStr5 += `${elem.title} has ${elem.materials.length} materials:\n${arrToList(elem.materials)}\n`);

document.getElementById('answer5').innerHTML = htmlStr5;

//answer 6 ========================================

function whoMade(arr) {
    return arr.filter(item => {
        if (item.who_made === 'i_did') {
            return item;
        }
    })
}

document.getElementById('answer6').innerHTML = `${whoMade(items).length} were made by their sellers`;

