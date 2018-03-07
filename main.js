// answer 1
function avgPrice(arr) {
    var total = arr.reduce((prev, curr) => ({price: prev.price + curr.price}))
    return total.price / arr.length
}

document.getElementById('answer1').innerHTML = `The average price is ${avgPrice(items).toFixed(2)}`

//answer 2
function costRange(arr) {
    return arr.filter(item => {
        if (item.price > 14 && item.price < 18) {
            return item
        }
    }).map(elem => elem.title)
    
}

var htmlStr = ''
costRange(items).forEach((item, i) => 
    htmlStr += `${item}\n`
)
document.getElementById('answer2').innerHTML = htmlStr

//answer 3
var htmlStr3 = '';
function gbp(arr) {
    return arr.filter(item => item.currency_code === "GBP")
}

var htmlStr1 = `${gbp(items)[0].title} ${gbp(items)[0].price}`
document.getElementById('answer3').innerHTML = htmlStr1

//answer 4
function woody(arr) {
    return arr.filter(item => {
        if (item.materials.includes('wood')) {
            return item
        }
    })
}


(woody(items)).forEach(item => {
    htmlStr3 += `${item.title} is made of wood\n`
})

document.getElementById('answer4').innerHTML = htmlStr3;

//answer 5
function matAmountAboveEight(arr) {

}