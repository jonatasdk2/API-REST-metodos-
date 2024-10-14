import {Request,Response } from "express";

type TInstrutore={
    id:number
    nome:string
    email:string
}

const instrutores :TInstrutore[]= [
    {
        id:1,
        nome:'jonatas',
        email:'jonatas@email.com'
    },
    {
        id:2,
        nome:'maria',
        email:'maria@email.com'
    }
]

export const listar=(req:Request,res:Response)=>{
return res.status(200).json(instrutores)
}