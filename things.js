/*
----------------------------------
                    CLASSES

class TodosList {
    constructor() {
        this.todos = []  // this.sla cria uma variavel
    }

    addTodo() {
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}

const MinhaLista = new TodosList()

document.getElementById('novotodo')
.onclick = function() {
    MinhaLista.addTodo()
}



class List {
    constructor(){
        this.data = []
    }
    
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List{       //extends extende para a class chamada
    constructor(){
        super()   // chama a função pai

        this.usuario = 'Marquito'
    }

    mostraUsuario(){
        console.log(this.usuario)
    }
    
}
 

const novalista = new TodoList()

document.getElementById('novotodo')
.onclick = function(){
    novalista.add('NovoTodo')
}

novalista.mostraUsuario()


class Matematica {

    static soma(a, b){   // static é feita de forma assincrona com o resto da classe
        return a + b
    }
}

console.log(Matematica.soma(1,2))

--------------------------------------------------
    

                OPERAÇÕES COM ARRAY

const arr = [1, 3, 4, 5, 8, 9] 

const newArr = arr.map(function(item, index) { // função map percorre o array e retorna uma nova informação
    return item + index
})

console.log(newArr)

const sum = arr.reduce(function(total,next){ //função reduce transforma o array em uma unica coisa, geralmente uma var/numero
    return total + next
})

console.log(sum)

const filter = arr.filter(function(item){ //função filter retorna os item dos array que forem verdadeiros de acordo com a condição dada
    return item % 2 === 0 
})

console.log(filter)

const find = arr.find(function(item){ // função find procura uma informção dentro do array e diz se existe la ou nao
    return item === 2
})

console.log(find)

---------------------------------------------------
            ARROW FUNCTION

const arr = [1, 3, 4, 5, 6]

-----
const newArr = arr.map(function(item){  // maneira normal de se escrever uma função anonima
    return item * 2
})

console.log(newArr)
-----

const newArr = arr.map(item => item * 2) //função anonima em formato arrow function

console.log(newArr)


function test () {
    return 'Marquito'
}

const teste = () => 'Marquito'
console.log(teste())

---------------------------------
            VALORES PADRAO

--------
function soma(a = 3 , b = 6 ) {
    return a + b
}
-------

const soma = (a = 3, b = 6) => a + b

console.log(soma(1))
console.log(soma())

---------------------------------------------
                DESESTRUTURAÇÃO

const usuario = {
    nome: 'Marco',
    idade: 18,
    endereco: {
        cidade: 'Livramento',
        estado: 'RS',
    }
}

const { nome, idade, endereco: { cidade } } = usuario  // abrir um ojeto antes do sinal de igual e botar oq vc quer pegar

console.log(nome)
console.log(idade)
console.log(cidade)

--------------------------------------------    
                REST/SPREAD

// REST  => pega o resto de uma desestruturação/passagem de parametros...

const usuario = {
    nome: "Marco",
    idade: 18,
    empresta: "UFPB"
}

const { nome, ...resto} = usuario

console.log(nome)
console.log(resto)

const arr = [1, 2, 3, 4,]



const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c)
function soma(...params) {
    return params.reduce((total,next) => total + next)
}

console.log(soma(1, 3, 4, 6, 5, 8))



// SPREAD => propagar, repassar as informações de um obj/array e passar para outro estrutura de dados

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario1 = { 
    nome: 'Marco',
    idade: 18,
    empresa: 'UFPB'
}

const usuario2 = { ...usuario1, nome: 'João'}

console.log(usuario2)

-------------------------------------------------
                SINTAXE CURTA DE OBEJTO

const nome = 'Marco'
const idade = 18

const usuario = {
    nome, 
    idade, 
    empresa: 'UFPB'
}

console.log(usuario)

-------------------------------------------------
                    ASYNC/AWAIT

// FORMA DE PROMISE

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve("OK")}, 2000)
})

minhaPromise()
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(reject)
    })

// ASYNC AWAIT

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve("OK")}, 2000)
})

async function executaPromise() {
    const response = await minhaPromise()
}

//COM ARROW FUNCTION

const executaPromise = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()

--------------------------------------------
                AXIOS

import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        
        }catch (erro) {
            console.warn('ERRO NA API')

        }
    }
}
Api.getUserInfo('Marrquito')





*/
