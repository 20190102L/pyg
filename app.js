const path= require('path')

const express = require('express')
const createError = require('http-errors')
const Youch = require('youch')
const artTemplate = require('express-art-template')
const bodyParser = require('body-parser')
const favicon = require('express-favicon')
const logger = require('morgan')

const router = require('./router')
const middleware = require('./middleware')



// 创建应用
const app = express()
app.listen(1000,()=>console.log('start 1000'))


//所有路由
app.use(logger('dev'))
app.engine('art',artTemplate)
app.set('view engine','art')
app.set('view options',{
    debug:process.env.MODE_ENV !== 'production'
})
app.use('/',express.static(path.join(__dirname,'./public')))
app.use(bodyParser.join())
app.use(bodyParser.urlencoded({extended:false}))
app.use(favicon(path.join(__dirname,'favicon.ico')))

app.use(middleware.global)
app.use(router)
app.use((req,res,next)=>{
    const env = req.app.get('env')
    if(env === 'development'){
        return new Youch(err,req).toHTML().then(html =>res.send(html))
    }
    res.locals.status = err.status === 404?404:500
    res.render('error')
})








//错误处理
// app.use((req,res,next)=>{
//     // const error= new Error('Not Found')
//     next(createError(404))
// })
// // 500情况
// app.use((err,req,res,next)=>{
//     // 1.如果是开发。。。响应完整信息给客户端
    
//     // 2.如果是生产端，响应友好的页面
//     const env = req.app.get('env')
//     if(env==='development'){
        
//     }
// })

