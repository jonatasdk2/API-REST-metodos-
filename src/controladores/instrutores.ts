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
//listar
export const listar=(req:Request,res:Response)=>{
return res.status(200).json(instrutores)
}

//encontar um instrutor pelo id
export const detalhar=(req:Request,res:Response)=>{

    const {id}=req.params
    const instrututor=instrutores.find((item)=>{
        return item.id===Number(id)
    })
    if (!instrututor) {
        return res.status(400).json('instrutor não encontrado')
    }

    return res.status(200).json(instrututor)
    }

    export const cadastrar=(req:Request,res:Response)=>{

        const {nome,email}=req.body

        const novoUsuario:TInstrutore={
            id:3,
            nome,
            email
        }
        instrutores.push(novoUsuario)

        return res.status(201).json(novoUsuario)
        
        }
        