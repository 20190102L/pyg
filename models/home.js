const axios = require('./api')

exports.getSlider=()=>{
    return axios.get('settings/home_slider').then(res=>res.data).catch(err=>Promiseomise.reject(err))
}