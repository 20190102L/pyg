const homeModel = require('../models/home')

exports.index = (req,res,next)=>{
    homeModel.getSlider().then(data=>{
        res.local.slider = data
        res.render('home')
    }).catch(err=>next(err))
}