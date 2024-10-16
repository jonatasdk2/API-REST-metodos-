import {Router}  from 'express'
import { atualizar, atualizarEmail, cadastrar, deletar, detalhar, listar } from './controladores/instrutores'
import { cadastrarAula, deletaraula } from './controladores/aulas'

const rotas=Router()

// listar todos os instrutores
rotas.get('/instrutores',listar)

//detalhar informações de um instrutor 
rotas.get('/instrutores/:id',detalhar)

//cadastrar instrutor
rotas.post('/instrutores/',cadastrar)

//editar um instrtutor
rotas.put('/instrutores/:id',atualizar)

//excluir um instrutor
rotas.delete('/instrutores/:id',deletar)

// atualização pontual
rotas.patch('/instrutores/:id/alterarEmail',atualizarEmail)

//cadastrar uma aula para um instrutor
rotas.post('/instrutores/:id/aulas',cadastrarAula)

//excluir uma aula para um instrtutor
rotas.delete(  '/instrutores/:id/aulas/:idaula',deletaraula)


export default rotas