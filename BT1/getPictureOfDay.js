const  axios = require('axios');
async function getPictureOfDay(){
    let a =await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    return a.data
}
getPictureOfDay().then((result)=>{
    console.log(result)
})