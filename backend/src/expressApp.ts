import express,{Express} from 'express'
import passport from 'passport'
import AuthApi from './api/auth'
import cors from 'cors'
import session from 'express-session'


const app =async(app:Express)=>{

    //set middleware
    app.use(express.json())
    app.use(passport.initialize())
    app.use(cors())
    app.use(session({secret:'secret',resave:true,saveUninitialized:true}))
    app.use(passport.session())

    //register api
    new AuthApi(app)

}

export default app