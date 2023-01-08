async function maxNumber(number) {
    if (number instanceof Array) {
        let max = number[0]
        for (let i = 0; i < number.length; i++) {
            if (max < number[i]) {
                max = number[i]
            }


        }
        return max
    } else {
        throw Error('This is error !')
    }

}

async function f() {
    try {
        let a = await maxNumber([3, 5, 7, 4, 6, 9, 1])
        console.log(a)
    } catch (result) {
        console.log(result)
    }

}

f()
console.log('Today Im sad')

