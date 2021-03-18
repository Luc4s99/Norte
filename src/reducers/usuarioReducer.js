const INITIAL_STATE = {
    usuarioLogado: 0,
    usuarioEmail: '',
    usuarioNome: '',
    usuarioNascimento: new Date,
    usuarioCidade: '',
    usuarioCpf: '',
    usuarioEstado: '',
    usuarioTelefone: '',
    usuarioDescricao: '',
    usuarioEndereco: ''
}


function usuarioReducer (state = INITIAL_STATE, action){
    switch (action.type){
       case 'LOG_IN': return {...state,
                                 usuarioLogado: 1,
                                 usuarioEmail: action.payload.usuarioEmail,
                                 usuarioNome: action.payload.usuarioNome,
                                 usuarioNascimento: action.payload.usuarioNascimento,
                                 usuarioCidade: action.payload.usuarioCidade,
                                 usuarioCpf: action.payload.usuarioCpf,
                                 usuarioEstado: action.payload.usuarioEstado,
                                 usuarioTelefone: action.payload.usuarioTelefone,
                                 usuarioDescricao: action.payload.usuarioDescricao,
                                 usuarioEndereco: action.payload.usuarioEndereco

                            }
       case 'LOG_OUT': return {...state,
                                  usuarioLogado: 0,
                                  usuarioEmail: null ,
                                  usuarioNome: null,
                                  usuarioNascimento: null,
                                  usuarioCidade: null,
                                  usuarioCpf: null,
                                  usuarioEstado: null,
                                  usuarioTelefone: null,
                                  usuarioDescricao: null,
                                  usuarioEndereco: null
                                }                          
    }

    return state;
  
}


export default usuarioReducer;