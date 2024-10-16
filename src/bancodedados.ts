type TInstrutores = {
    id: number
    nome: string
    email: string
    aula?:Taulas[]
}
type Taulas={
    id:number,
    nome:string
}
type TBancoDeDados={
    novoId:number,
    novoIdAula:number,
    instrutores:TInstrutores[],
}




 const bancodedados:TBancoDeDados ={
    novoId :3,
    novoIdAula:2,
    instrutores:  [
        {
            id: 1,
            nome: 'jonatas',
            email: 'jonatas@email.com',
            aula:[]
        },
        {
            id: 2,
            nome: 'maria',
            email: 'maria@email.com',
            aula:[
                    {id:1,
                        nome:'aula de API REST'
                    }
            ]
        }
    ]

}

export default bancodedados