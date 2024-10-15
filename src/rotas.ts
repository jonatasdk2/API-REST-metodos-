import {Router}  from 'express'
import { atualizar, cadastrar, deletar, detalhar, listar } from './controladores/instrutores'

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

//cadastrar uma aula para um instrutor
//excluir uma aula para um instrtutor



export default rotas