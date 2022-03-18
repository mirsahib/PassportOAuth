import {Express,Request,Response} from 'express'

class AuthApi{

    app:Express

    constructor(app:Express){
        this.app = app
        this.intializeRoute()
    }

    intializeRoute(){
        this.app.get('/',async (req:Request,res:Response)=>{
            res.send('hello')
        })
    }

}

export default AuthApi