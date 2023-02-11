const express = require('express')
const router= express.Router()
const cron = require('node-cron')

router.get('/hello', (req,res)=> { res.send("Working fine")})

router.get('/:text/:time', function(req,res){
     let text = req.params.text
     let time = req.params.time
     console.log(time)
     console.log(text)
     time = Number(time)

    let task= cron.schedule(`*/${time} * * * * *`, ()=> {
        console.log(`text = ${text},
        time = ${Date.now()}`)
     },
     {
        scheduled:true
     })

     task.start()


})





module.exports = router