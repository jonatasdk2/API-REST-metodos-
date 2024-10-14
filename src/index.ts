
import 'dotenv/config'
import Express, { Request, Response }  from "express"; 
import rotas from './rotas';


const app = Express()

app.use(Express.json())

app.use(rotas)

app.listen(process.env.PORT,()=>{
    console.log('funcionando');
    
})