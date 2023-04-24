
import {
    GET_PRODUCTS,
    POST_PRODUCTS,
    SEARCH_POKEMON,
    FILTER_BY_TYPE,
    FILTER_BY_CREATED,
    ORDER_BY_NAME,
    GET_CATEGORY,
    GET_TYPES,
    ORDER_BY_ATTACK,
    GET_POKEMON_DETAIL,
    ASK_TO_GPT
} from "./actions";

const initialState = {

    allProducts: [],
        product: [],
          types: [],
         detail: [],
      categorys: [],
      respuestas : []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                product: action.payload,
                allProducts: action.payload
            }

        case POST_PRODUCTS:
            return {
                ...state,
            }
        case GET_CATEGORY:
            return {
                ...state,
                categorys : action.payload
            }

            case ASK_TO_GPT: 
            return {
                ...state,
                respuestas: action.payload
            }
        // case SEARCH_POKEMON:
        //     return {
        //         ...state,
        //         pokemon: action.payload
        //     }


        // case GET_POKEMON_DETAIL:
        //     return {
        //         ...state,
        //         detail: action.payload
        //     }

        // case GET_TYPES:
        //     return {
        //         ...state,
        //         types: action.payload
        //     }

        // case FILTER_BY_TYPE:
        //     const allPokemon = state.allPokemons
        //     const filteredType = action.payload === "all" ? allPokemon : allPokemon.filter(el => el.types === action.payload)
        //     return {
        //         ...state,
        //         allPokemons: filteredType
        //     }

        // case FILTER_BY_CREATED:
        //     const allPokemons = state.allPokemons
        //     const createdFilter = action.payload === "created" ? allPokemons.filter(el => el.createInDb) : allPokemons.filter(el => !el.createInDb)
        //     return {
        //         ...state,
        //         allPokemons: action.payload === "ALL" ? state.allPokemons : createdFilter
        //     }

        // case ORDER_BY_NAME:
        //     let sortedArr = action.payload === "ASC" ?
        //         state.allPokemons.sort(function (a, b) {
        //             if (a.name > b.name) {
        //                 return 1;

        //             } if (b.name > a.name) {
        //                 return -1
        //             }
        //             return 0
        //         }) :
        //         state.allPokemons.sort(function (a, b) {
        //             if (a.name > b.name) {
        //                 return -1;
        //             } if (b.name > a.name) {
        //                 return 1;
        //             }
        //             return 0
        //         })
        //     return {
        //         ...state,
        //         allPokemons: sortedArr
        //     }
        // case ORDER_BY_ATTACK:
        //     let sorted = action.payload === "bigger" ?
        //         state.allPokemons.sort(function (a, b) {
        //             if (a.attack < b.attack) {
        //                 return 1;
        //             }
        //             if (b.attack < a.attack) {
        //                 return -1
        //             } return 0
        //         }) : state.allPokemons.sort(function (a, b) {
        //             if (a.attack < b.attack) {
        //                 return -1
        //             } if (b.attack < a.attack) {
        //                 return 1
        //             } return 0
        //         })
        // return {
        //     ...state,
        //     allPokemons: sorted
        // }


        default:
            return state;
    }
}