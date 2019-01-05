// 集合所有的路由，其他的放到controller
const express = require('express')
const router = express.Router()
const home = require('./controllers/account')
const account = require('./controllers/account')


router.get('/',home.index)

router.get('/login',account.login)


module.exports = router
