
import 'dotenv/config'
import Express, { Request, Response }  from "express"; 

const app = Express()

app.get('/',(req:Request,res:Response)=>{

    return res.send('ok')
})
app.listen(process.env.PORT,()=>{
    console.log('funcionando');
    
})