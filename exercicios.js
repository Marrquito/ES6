// ASYNC/AWAIT/AXIOS
const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

async function umPorSegundo(){
    await delay()
    console.log('1s')
    
    await delay()
    console.log('2s')
    
    await delay()
    console.log('3s')

}
umPorSegundo()


// ---------------------------------

import axios from 'axios'

async function getUserFromGithub(user){
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)

    }catch(err){
        console.log('Usuario nao existe')
    }

}

getUserFromGithub('Marrquito')
getUserFromGithub('Marrquitoadaasda')

// ----------------------------

import axios from "axios";

class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response)
        }catch(err){
            console.log('Repositorio nao existe')
        }
        
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br')
Github.getRepositories('rocketseat/askdadka')

// -----------------------------------------

import axios from 'axios'

async function buscarUser(username){
    try{
        const response = await axios.get (`https://api.github.com/users/${username}`)
        console.log(response.data)
    }catch(err){
        console.log('usuario nao existe')
    }
}

buscarUser('Marrquito')