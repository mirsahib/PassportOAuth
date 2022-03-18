import express from 'express'
import db from './database'
import expressApp from './expressApp'

const StartServer = async ()=>{
    const app = express()
    await expressApp(app)

    await db.dbConnection()


    app.listen(3001,()=>{
        console.log('Server started at port 3001')
    })
}


StartServer()
