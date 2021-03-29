const INITIAL_STATE = {
    
    nomeFantasia: '',
    cnpj: '',
    razaoSocial: '',
    emailEmpresa: '',
    senha: '',
    cidade: '',
    estado: '',
    endereco: '',
    telefone: '',
    interesses: [],
    descricao: ''
}

function empresaReducer (state = INITIAL_STATE, action){
    switch (action.type){
       case 'LOG_IN': return {...state,
                                 nomeFantasia: action.payload.nomeFantasia,
                                 cnpj: action.payload.cnpj,
                                 razaoSocial: action.payload.razaoSocial,
                                 emailEmpresa: action.payload.emailEmpresa,
                                 empresaSenha: action.payload.empresaSenha,
                                 empresaCidade: action.payload.empresaCidade,
                                 empresaEstado: action.payload.empresaEstado,
                                 empresaEndereco: action.payload.empresaEndereco,
                                 empresaTelefone: action.payload.empresaTelefone,
                                 interesses: action.payload.interesses,
                                 empresaDescricao: action.payload.empresaDescricao
 
                            }
       case 'LOG_OUT': return {...state,
                                nomeFantasia: '',
                                cnpj: '',
                                razaoSocial: '',
                                emailEmpresa: '',
                                senha: '',
                                cidade: '',
                                estado: '',
                                endereco: '',
                                telefone: '',
                                interesses: [],
                                descricao: ''
                                }                          
    }

    return state;
  
}


export default empresaReducer;