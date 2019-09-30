module.exports = (data) => {
    var text = ""
    Console.log (`Before ${text}`)

    let loop = data.map((value, index) => text += `value of ${index} is ${value} |`)
    Console.log(`After ${text}`)

    let result = {
        loop,text
    }

    return result
}