import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Formgroup, H2style, Inputgroup, Descricao, Fotoinput, Fotopreview, Buttongroup, Wrapper } from './styles';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PerfilPessoa() {
   
    const usuarioEmail = useSelector(state => state.user.usuarioEmail)
    // const usuarioNome = useSelector(state => state.user.usuarioNome)
    // const usuarioCidade = useSelector(state => state.user.usuarioCidade)
    // const usuarioCpf = useSelector(state => state.user.usuarioCpf)
    // const usuarioEndereco = useSelector(state => state.user.usuarioEndereco)
    // const usuarioEstado = useSelector(state => state.user.usuarioEstado)
    // const usuarioNascimento = useSelector(state => state.user.usuarioNascimento)
    // const usuarioTelefone = useSelector(state => state.user.usuarioTelefone)
    // const usuarioDescricao = useSelector(state => state.user.usuarioDescricao)

    const [usuarioNome, setUsuarioNome] = useState('');
    const [usuarioCidade, setUsuarioCidade] = useState('');
    const [usuarioCpf, setUsuarioCpf] = useState('');
    const [usuarioEndereco, setUsuarioEndereco] = useState('');
    const [usuarioEstado,setUsuarioEstado] = useState('');
    const [usuarioNascimento,setUsuarioNascimento] = useState(new Date());
    const [usuarioTelefone,setUsuarioTelefone] = useState('');
    const [usuarioDescricao,setUsuarioDescricao] = useState('');
    const [usuarioFoto, setUsuarioFoto] = useState('');
    
    const db = firebase.firestore();
    const storage = firebase.storage();
    const [verificaCurriculo, setVerificaCurriculo] = useState(1);

    const [alterou, setAlterou] = useState(false);
    const [placeholderNome, setPlaceholderNome] = useState('');
    const [placeholderCidade, setPlaceholderCidade] = useState('');
    const [placeholderCpf, setPlaceholderCpf] = useState('');
    const [placeholderEndereco, setPlaceholderEndereco] = useState('');
    const [placeholderEstado, setPlaceholderEstado] = useState('');
    // const [placeholderNascimento, setPlaceholderNascimento] = useState('');
    const [placeholderTelefone, setPlaceholderTelefone] = useState('');
    const [placeholderDescricao, setPlaceholderDescricao] = useState('');
    const [placeholderFoto, setPlaceholderFoto] = useState('');

    useEffect(()=>{
        console.log("effect",usuarioFoto)
        firebase.storage().ref(`imagens/${usuarioFoto}`).getDownloadURL()
                          .then(url => setPlaceholderFoto(url))
                          .catch(erro => setPlaceholderFoto("https://via.placeholder.com/100x50"));
    },[placeholderFoto]);

    useEffect(()=>{
        
        if(usuarioEmail === null){
            window.location.href = "http://localhost:3000/login";
        } else {
            
            db.collection("curriculos").doc(usuarioEmail).get().then((doc)=>{
                if(doc.exists){               
                    setVerificaCurriculo(1);
                    
                } else{
                    setVerificaCurriculo(0);
                }
            }).catch((error)=>{
                console.log("Erro ao tentar recuperar curriculo:",error);
            });

            console.log(usuarioEmail)
            db.collection("usuarios").doc(usuarioEmail).get().then((doc)=>{
                
                setUsuarioNome(doc.data().nome)
                setUsuarioCidade(doc.data().cidade)
                setUsuarioCpf(doc.data().cpf)
                setUsuarioEndereco(doc.data().endereco)
                setUsuarioEstado(doc.data().estado)
                setUsuarioNascimento(doc.data().nascimento)
                setUsuarioTelefone(doc.data().telefone)
                setUsuarioDescricao(doc.data().descricao)
                setUsuarioFoto(doc.data().foto)
                
                console.log("doc",doc.data().foto) 
                console.log("state",usuarioFoto)               
                
                setAlterou(!alterou);
            }).catch((error)=>{
                console.log("Erro ao tentar recuperar informações do usuário:",error);
            });
        }
        
    },[])
    
    function toDateTime(secs){
        var t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        return t;
    }

    useEffect(()=>{

        setPlaceholderNome(usuarioNome);
        setPlaceholderCidade(usuarioCidade);
        setPlaceholderCpf(usuarioCpf);
        setPlaceholderEndereco(usuarioEndereco);
        setPlaceholderEstado(usuarioEstado);
        // setPlaceholderNascimento(usuarioNascimento);
        setPlaceholderTelefone(usuarioTelefone);
        setPlaceholderDescricao(usuarioDescricao);
        setPlaceholderFoto(usuarioFoto);

    },[alterou])
    
    function handleChangeNome(event){
        setPlaceholderNome(event.target.value);
    }

    function handleChangeCidade(event){
        setPlaceholderCidade(event.target.value);
    }

    function handleChangeCpf(event){
        setPlaceholderCpf(event.target.value);
    }

    function handleChangeEndereco(event){
        setPlaceholderEndereco(event.target.value);
    }

    function handleChangeEstado(event){
        setPlaceholderEstado(event.target.value);
    }

    // function handleChangeNascimento(event){
    //     setPlaceholderNascimento(event.target.value);
    // }

    function handleChangeTelefone(event){
        setPlaceholderTelefone(event.target.value);
    }
    
    function handleChangeDescricao(event){
        setPlaceholderDescricao(event.target.value);
    }

    function salvarAlteracoes(){

        db.collection("usuarios").doc(usuarioEmail).get().then((doc)=>{
                
            setUsuarioNome(doc.data().nome)
            setUsuarioCidade(doc.data().cidade)
            setUsuarioCpf(doc.data().cpf)
            setUsuarioEndereco(doc.data().endereco)
            setUsuarioEstado(doc.data().estado)
            setUsuarioTelefone(doc.data().telefone)
            setUsuarioDescricao(doc.data().descricao)
            setUsuarioFoto(doc.data().foto)

            setAlterou(!alterou);
        }).catch(()=>{
            console.log("Erro na edição, tente novamente!");
        });
        
        db.collection("usuarios").doc(usuarioEmail).set({

            telefone: placeholderTelefone,
            estado: placeholderEstado,
            nascimento: usuarioNascimento,
            cidade: placeholderCidade,
            cpf: placeholderCpf,
            nome: placeholderNome,
            endereco: placeholderEndereco,
            descricao: placeholderDescricao,
            email: usuarioEmail,
            // foto: placeholderFoto+usuarioEmail
            foto: usuarioFoto

        }).then( () => {
            
            console.log("IMPORTANTE=>",placeholderFoto)
            // storage.ref(`imagens/${placeholderFoto+usuarioEmail}`)
            //            .put(placeholderFoto)
            //            .then()
            //            .catch();
            alert("Dados alterados com sucesso!");
            
        }).catch(() => {
    
            alert("Erro na edição, tente novamente!");
        })
    }

    

    return(
        <>            
            <Navbar/>

            <Wrapper>

                <H2style>Meu Perfil</H2style>

                <Formgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                            <input value={usuarioNome} readOnly type="text" className="form-control" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                            <input value={usuarioCidade} readOnly type="text" className="form-control" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                            <input value={usuarioCpf} readOnly type="text" className="form-control" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Telefone</span>
                            <input value={usuarioTelefone} readOnly type="text" className="form-control" />
                        </div>
                    </Inputgroup>
            
                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Data de Nascimento</span>
                            <input value={toDateTime(usuarioNascimento.seconds).toLocaleDateString('pt-BR')} readOnly type="text" className="form-control" />                            
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                            <input value={usuarioEndereco} readOnly type="text" className="form-control" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">E-mail</span>
                            <input value={usuarioEmail} readOnly type="email" className="form-control" />
                        </div>
                    </Inputgroup>

                    <Inputgroup>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Endereço</span>
                            <input value={usuarioEstado} readOnly type="text" className="form-control" />                            
                        </div>
                    </Inputgroup>
                
                </Formgroup>

                <Fotoinput>

                    <Fotopreview>
                        {/* {console.log(placeholderFoto)} */}
                        <img src={placeholderFoto} alt="Pré-visualização da foto" className="preview-img" />                        

                    </Fotopreview>
                        
                </Fotoinput>

                <H2style>Descrição</H2style>

                <Descricao>
                    <div className="input-group">
                        <span className="input-group-text">Descrição</span>
                        <textarea value={usuarioDescricao} readOnly className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </Descricao>

                <Buttongroup>

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalEdicao"> 
                        Editar Perfil
                    </button>
                    
                    {verificaCurriculo === 1 
                        ? <Link to="/perfilCurriculo" type="button" className="btn btn-success"> Ver Currículo </Link>
                        : <Link to="/cadastroCurriculo" type="button" className="btn btn-warning"> Cadastrar Currículo </Link>}                    
                    
                </Buttongroup>

            </Wrapper>

            <Footer/>

            {/* Modal Edição */}
            <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header text-center">
                            <h5 className="modal-title w-100">Editar Perfil</h5>
                        </div>

                        <div className="modal-body">
                            <div>                                
                                <label>Nome</label>
                                <input type="text" value={placeholderNome} onChange={handleChangeNome} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Cpf</label>
                                <input type="text" value={placeholderCpf} onChange={handleChangeCpf} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Cidade</label>
                                <input type="text" value={placeholderCidade} onChange={handleChangeCidade} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Estado</label>
                                {/* <input type="text" value={placeholderEstado} onChange={handleChangeEstado} className="form-control mb-2" /> */}
                                <select onChange={handleChangeEstado} className="form-select mb-2" value={placeholderEstado} 
                                style={{
                                    width:"100%", height:"calc(1.5em + .75rem + 2px)", border:"1px solid #ced4da",
                                    padding:".375rem .75rem"
                                }} >
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>
                            <div>                                
                                <label>Endereco</label>
                                <input type="text" value={placeholderEndereco} onChange={handleChangeEndereco} className="form-control mb-2" />
                            </div>
                            <div>                                
                                <label>Telefone</label>
                                <input type="text" value={placeholderTelefone} onChange={handleChangeTelefone} className="form-control mb-2" />
                            </div>
                            {/* Data de nascimento não vai ser alterada pq da muito trabalho, */}
                            {/* Se o usuário achar ruim, manda email pro suporte */}
                            {/* <div>                                
                                <label>Nascimento</label>                                
                                <input type="date" onChange={handleChangeNascimento} className="form-control mb-2" />
                            </div> */}
                            <div>                                
                                <label>Foto</label>
                                <input type="file"  id="inputGroupFile04" className="form-control" aria-describedby="inputGroupFileAddon04" aria-label="Upload" 
                                 onChange={(e) => {
                                    console.log("EZINHO",e.target.files[0])
                                    console.log("OnChange",placeholderFoto)
                                    setPlaceholderFoto(e.target.files[0])
                                    console.log("OnChange2",placeholderFoto)
                                    }
                                 }/>
                            </div>
                            <div>                                
                                <label>Descricao</label>
                                <input type="text" value={placeholderDescricao} onChange={handleChangeDescricao} className="form-control mb-2" />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>setAlterou(!alterou)}>Cancelar</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={() => salvarAlteracoes()}>Salvar</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default PerfilPessoa;