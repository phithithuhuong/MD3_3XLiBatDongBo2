async function get(a,b){
    if (b!=0){
        return a/b
    } else {
        return new Error('Error')
    }
}
// get(10,2).then((result)=>{
//     console.log(result)
//
// }).catch((reason)=>{
//     console.log(reason)
// })
 async function f(){
     try {
         let a= await get(10,2)
         console.log(a)
     } catch (err){
         console.log(err)
     }
 }
 f()


