// constantes
const dataInicial = {
    array: []
}

// types
const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'

// reducer
export default function reducer(state = dataInicial, action:any){
    switch(action.type){
        case GET_POKE_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// actions
export const obtenerPokemonsAction = () => async (dispatch:any) => {
    try {
        // const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        // dispatch({
        //     type: GET_POKE_SUCCESS,
        //     payload: res.data.results
        // })
    } catch (error) {
        console.log(error)
    }
}