
import 'dotenv/config'
import Express, { Request, Response }  from "express"; 
import { teste } from './controladores/controladores';
import rotas from './rotas';


const app = Express()

app.use(rotas)

app.listen(process.env.PORT,()=>{
    console.log('funcionando');
    
})