import React, {useState, useEffect} from 'react';

import { Container, Pessoal, Info, Pessoa, Contato, Descricao, Habilidades, Experiencia} from './styles';
import firebase from '../../config/firebase';

function Curriculo({experiencia, formacao, habilidades, idiomas, outrasAtividades, referencias, usuarioEmail}) {
   
    const [usuarioNome, setUsuarioNome] = useState('');
    const [usuarioCidade, setUsuarioCidade] = useState('');
    const [usuarioCpf, setUsuarioCpf] = useState('');
    const [usuarioEndereco, setUsuarioEndereco] = useState('');
    const [usuarioEstado,setUsuarioEstado] = useState('');
    const [usuarioNascimento,setUsuarioNascimento] = useState(new Date());
    const [usuarioTelefone,setUsuarioTelefone] = useState('');
    const [usuarioDescricao,setUsuarioDescricao] = useState('');
    
    const db = firebase.firestore();
    
    useEffect(()=>{
        db.collection("usuarios").doc(usuarioEmail).get().then((doc)=>{
                    
            setUsuarioNome(doc.data().nome)
            setUsuarioCidade(doc.data().cidade)
            setUsuarioCpf(doc.data().cpf)
            setUsuarioEndereco(doc.data().endereco)
            setUsuarioEstado(doc.data().estado)
            setUsuarioNascimento(doc.data().nascimento)
            setUsuarioTelefone(doc.data().telefone)
            setUsuarioDescricao(doc.data().descricao)

        
        }).catch((error)=>{
            console.log("Erro ao tentar recuperar informações do usuário:",error);
        });

    },[])

    function toDateTime(secs){
        var t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        return t;
    }

    return (
        <>
            <Container>
                <Pessoal>
                    <Pessoa>
                        <img src="https://via.placeholder.com/150" alt="Foto de Perfil"></img>
                        <h3 className="mt-3">{usuarioNome}</h3>
                        <h5 className="mt-1">{formacao}</h5>
                    </Pessoa>
                    <Contato>
                        <h4>Contato:</h4>
                            <h5>Endereco:</h5>
                            <p>
                                Estado: {usuarioEstado} <br/>
                                Cidade: {usuarioCidade} <br/>                                
                                Rua: {usuarioEndereco}
                            </p>

                            <h5>Data de Nascimento:</h5>
                            <p>{toDateTime(usuarioNascimento.seconds).toLocaleDateString('pt-BR')}</p>

                            <h5>Telefone:</h5>
                            <p>{usuarioTelefone}</p>

                            <h5>E-Mail:</h5>
                            <p>{usuarioEmail}</p>
                    </Contato>
                </Pessoal>
                <Info>
                    <Descricao>
                        <h4>Descrição:</h4>
                        {usuarioDescricao}
                    </Descricao>
                    <Habilidades>
                        <h4>Habilidades:</h4>
                        {habilidades}
                    </Habilidades>
                    <Experiencia>
                        <h4>Experiencias:</h4>
                        {experiencia}
                    </Experiencia>
                </Info>
            </Container>
            <br />
        </>
    );
}

export default Curriculo;