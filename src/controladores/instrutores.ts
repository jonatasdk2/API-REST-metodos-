import { Request, Response } from "express";
import bancodedados from "../bancodedados";



//listar
export const listar = (req: Request, res: Response) => {
    return res.status(200).json(bancodedados.instrutores)
}

//encontar um instrutor pelo id
export const detalhar = (req: Request, res: Response) => {

    const { id } = req.params
    const instrututor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    if (!instrututor) {
        return res.status(404).json('instrutor não encontrado')
    }

    return res.status(200).json(instrututor)
}

export const cadastrar = (req: Request, res: Response) => {

    const { nome, email } = req.body

    const novoUsuario = {
        id: bancodedados.novoId++,
        nome,
        email
    }
    bancodedados.instrutores.push(novoUsuario)

    return res.status(201).json(novoUsuario)

}

export const atualizar = (req: Request, res: Response) => {

    const { nome, email } = req.body
    const { id } = req.params
    const instrututor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    if (!instrututor) {
        return res.status(404).json('instrutor não encontrado')
    }

    instrututor.nome = nome
    instrututor.email = email

    return res.status(204).send()

}

export const deletar = (req: Request, res: Response) => {

    const { id } = req.params
    const instrututorIndice = bancodedados.instrutores.findIndex((item) => {
        return item.id === Number(id)
    })
    if (instrututorIndice === -1) {
        return res.status(404).json('instrutor não encontrado')
    }

   bancodedados.instrutores.splice(instrututorIndice,1)
    return res.status(204).send()

}

export const atualizarEmail= (req: Request, res: Response) => {

    const {  email } = req.body
    const { id } = req.params
    const instrututor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    if (!instrututor) {
        return res.status(404).json('instrutor não encontrado')
    }


    instrututor.email = email

    return res.status(204).send()

}