import { Request, Response } from "express";
import bancodedados from "../bancodedados";




//adiciona uma nova aula ao instrutor
export const cadastrarAula = (req: Request, res: Response) => {

    const { id } = req.params


    const Instrutor = bancodedados.instrutores.find(item => {
        return item.id === Number(id)
    })
    if (!Instrutor) {
        return res.status(404).json("instrutor nao encontrado")
    }

    const novaAula = {
        id: bancodedados.novoIdAula++,
        nome: "evoluindo em programação"
    }

    if (Instrutor.aula) {
        Instrutor.aula.push(novaAula)
        return res.status(201).json(novaAula)
    }
    Instrutor.aula = [novaAula]
    return res.status(201).json(novaAula)

}

// deletar aula
export const deletaraula = (req: Request, res: Response) => {

    const { id, idaula } = req.params
    const instrututor = bancodedados.instrutores.find((item) => {
        return item.id === Number(id)
    })
    if (!instrututor) {
        return res.status(404).json('instrutor não encontrado')
    }

    if (!instrututor.aula) {
        return res.status(404).json('aula não encontrada')
    }

    const aula = instrututor.aula.findIndex(item => {
        return item.id === Number(idaula)
    })

    if (aula === -1) {
        return res.status(404).json('aula não encontrada')
    }

    instrututor.aula.splice(aula,1)

    return res.status(204).send()







}