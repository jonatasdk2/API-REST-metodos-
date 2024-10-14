import {Router}  from 'express'
import { listar } from './controladores/instrutores'

const rotas=Router()

// listar todos os instrutores
rotas.get('/instrutores',listar)
//detalhar informações de um instrutor 
//cadastrar instrutor
//editar um instrtutor
//excluir um instrutor

//cadastrar uma aula para um instrutor
//excluir uma aula para um instrtutor



export default rotas