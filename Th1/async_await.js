
let sum=0;
async function  sumArr(param){
    if (param instanceof Array){
        for (let i = 0; i < param.length; i++) {
            sum+=param[i]

        }

         return sum
    } else {
        throw new Error('Error !')
    }
}
async function f(){
    try {
        let result= sumArr([1,3,5,7])
        console.log(result)
    } catch (err){
        console.log(err)
    }
}
f()