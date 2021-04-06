import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { Container, Pessoal, Info, Pessoa, Contato, Descricao, Habilidades, Experiencia, Opcoes} from './styles';
import firebase from '../../config/firebase';
import firebaseUpdate from 'firebase/app';

function Curriculo({experiencia, formacao, habilidades, usuarioEmail, emailEmpresa}) {
   
    const [usuarioNome, setUsuarioNome] = useState('');
    const [usuarioCidade, setUsuarioCidade] = useState('');
    const [usuarioEndereco, setUsuarioEndereco] = useState('');
    const [usuarioEstado,setUsuarioEstado] = useState('');
    const [usuarioNascimento,setUsuarioNascimento] = useState(new Date());
    const [usuarioTelefone,setUsuarioTelefone] = useState('');
    const [usuarioDescricao,setUsuarioDescricao] = useState('');
    const [usuarioFoto, setUsuarioFoto] = useState('');
    const [placeholderUsuarioFoto, setPlaceholderUsuarioFoto] = useState('');
    
    const db = firebase.firestore();
    
    useEffect(()=>{
        db.collection("usuarios").doc(usuarioEmail).get().then((doc)=>{
                    
            setUsuarioNome(doc.data().nome)
            setUsuarioCidade(doc.data().cidade)
            setUsuarioEndereco(doc.data().endereco)
            setUsuarioEstado(doc.data().estado)
            setUsuarioNascimento(doc.data().nascimento)
            setUsuarioTelefone(doc.data().telefone)
            setUsuarioDescricao(doc.data().descricao)
            setUsuarioFoto(doc.data().foto)
        
        }).catch((error)=>{
            console.log("Erro ao tentar recuperar informações do usuário:",error);
        });
        
    },[])

    function toDateTime(secs){
        var t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        return t;
    }

    function sendNotification(){        

        db.collection("notificacoes").doc(usuarioEmail).update({            
            empresasInteressadas: firebaseUpdate.firestore.FieldValue.arrayUnion(emailEmpresa)
        }).then( () => {
            console.log(emailEmpresa, usuarioEmail);
        }).catch((error) => {
            console.log(error);
            alert("Erro na edição, tente novamente!");
        })

        document.getElementById("likeButton").disabled = true;

    }

    useEffect(()=>{
        firebase.storage().ref(`imagens/${usuarioFoto}`).getDownloadURL()
                          .then(url => setPlaceholderUsuarioFoto(url))
                          .catch(erro => setPlaceholderUsuarioFoto("https://via.placeholder.com/100"));
    },[usuarioFoto]);

    return (
        <>
            <Container>
                <Pessoal>
                    <Pessoa>
                        <img src={placeholderUsuarioFoto} alt="Foto de Perfil"></img>
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
                    <Opcoes>
                        <Link to={`/detalheCurriculo/${usuarioEmail}`} className="btn btn-primary"> + detalhes </Link>
                        <div>
                            <button disabled={true} type="button" className="btn btn-danger mr-3"> <i className="fal fa-thumbs-down"></i> </button>
                            <button type="button" id="likeButton" className="btn btn-success" onClick={sendNotification}> <i className="far fa-thumbs-up"></i> </button>
                        </div>
                    </Opcoes>
                </Info>
            </Container>
            <br />
        </>
    );
}

export default Curriculo;