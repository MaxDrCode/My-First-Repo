export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: [],
    //Remover TOKEN luego de finalizar el desarrollo, sino siempre aparece logeado
   // token: 'BQAy4CIUEs2Gcfp3ip8j394l_voCRP9HyE56kcgOAlUlo2t2vt1MW8_oEw_04W1NTk0fnSvSBbHUXvNE_FgynXz_IVBL4qG1D6CbPYQnzFbrePp4fruiWOzbOatd2raI_YYpXQtOZVKXKGeG61AsneOAW2vKwU4AxQ'
};

const reducer = (state, action) => {
    //console.log(action);

    //Action -> type, [payload]
    
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists
                };

            case 'SET_DISCOVER_WEEKLY':
                return {
                ...state,
                discover_weekly: action.discover_weekly
                }

        default:
            return state;
    }
}

export default reducer;