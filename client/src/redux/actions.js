import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS"
export const POST_PRODUCTS= "POST_PRODUCTS"
export const SEARCH_POKEMON = "SEARCH_POKEMON"
export const GET_POKEMON_DETAIL= "GET_POKEMON_DETAIL"
export const FILTER_BY_TYPE= "FILTER_BY_TYPE"
export const FILTER_BY_CREATED = "FILTER_BY_CREATED"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK"
export const GET_TYPES = "GET_POKEMON_TYPES"
export const GET_CATEGORY = "GET_CATEGORY"
export const ASK_TO_GPT = "ASK_TO_GPT"

export  function getProducts(){
    return async function (dispatch){
             const dataProducts = await axios.get("http://localhost:3001/products") 
            return dispatch({
                type: 'GET_PRODUCTS',
                payload: dataProducts.data
           } )
       
           
       
    }

};

export function postProducts(payload){
    return async function (dispatch){
        
            const response = await axios.post("http://localhost:3001/pokemons", payload)
            console.log(response)
            return response;
        
        
    }
}
 
const openAIEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export function AskToChatGpt(prompt){
    return async function (dispatch){
        const apiKey = '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';
    const response = await axios.post(openAIEndpoint, {
       prompt: prompt,
       max_tokens: 100,
       n: 1,
       stop: null,
       temperature: 0.7,
       api_key: apiKey
    });
    return dispatch({
     type: "ASK_TO_GPT",
     payload: response.data.choices[0].text.trim()
    })
    }
    
 
    
}

export function searchPokemon(name){
    return async function (dispatch){
        try {
            let getInfo = await axios.get("http://localhost:3001/pokemons?name=" + name )
          return  dispatch({
                type: "SEARCH_POKEMON",
                payload: getInfo.data
                        })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getPokemonDetail(id){
    return async function (dispatch){
        try {
            let detail = await axios.get("http://localhost:3001/pokemons" + id )
             dispatch({
                 type: GET_POKEMON_DETAIL,
                 payload:  detail.data
             })
             console.log(detail)
        } catch (error) {
            console.log(error)
        }
    }
}

export function getcategory(){
    return async function (dispatch){
        try {
            let category = await axios.get(`http://localhost:3001/category`)
            return dispatch({
                type: "GET_CATEGORY",
                payload: category.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function getTypes(){
    return async function (dispatch){
        try {
            let type = await axios.get(`http://localhost:3001/types`)
            return dispatch({
               type: "GET_TYPES",
               payload: type.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}


export function filterPokemonByType (payload){

     return  {
         type: FILTER_BY_TYPE,
         payload 
     }
}

export function filterCreated (payload){

    return {
        type: FILTER_BY_CREATED,
        payload
    }
}

export function orderByName (payload){
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export function orderByAttack(payload){
    return{
        type: ORDER_BY_ATTACK,
        payload
    }
}