  const onMyBirthday =async (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else {
                reject(new Error("I am sad"));
            }
        }, 2000);
    });
};

async function f(){
    try {
        let a= await onMyBirthday(false);
        console.log(a)
    } catch (err){
        console.log(err)
    } finally {
        console.log('Party')
    }

}
f()