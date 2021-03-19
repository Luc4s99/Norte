const INITIAL_STATE = {
    experiencia: [],
    formacao: [],
    habilidades: [],
    idiomas: [],
    referencias: [],
    outrasAtividades: [],
    usuarioEmail: ''
}

function curriculoReducer (state = INITIAL_STATE, action){
    switch (action.type){
       case 'LOG_IN': return {...state,
                                 usuarioLogado: 1,
                                 experiencia: action.payload.experiencia,
                                 formacao: action.payload.formacao,
                                 habilidades: action.payload.habilidades,
                                 idiomas: action.payload.idiomas,
                                 referencias: action.payload.referencias,
                                 outrasAtividades: action.payload.outrasAtividades,
                                 usuarioEmail: action.payload.usuarioEmail

                            }
       case 'LOG_OUT': return {...state,
                                 usuarioLogado: 0,
                                 experiencia: [],
                                 formacao: [],
                                 habilidades: [],
                                 idiomas: [],
                                 referencias: [],
                                 outrasAtividades: [],
                                 usuarioEmail: ''
                                }                          
    }

    return state;
  
}


export default curriculoReducer;