import React from 'react';
import Footer from '../../components/footer';
import { Wrapper, Title, Texto  } from './styles.js';
//import wallpaper from '../../assets/images/img_home.jpeg';
import logo from '../../assets/images/logo.jpg';
import { Link } from 'react-router-dom';

function Home() {

    return(
        <>
            <Wrapper>

                <Title><h1>Bem vindo ao Norte!</h1></Title>

                {/*<Image><img src={wallpaper} alt="Escritório de empresa"></img></Image>*/}

                <Texto>

                    <h4>Venha fazer parte do Norte e se destacar ainda mais em sua vida profissional. Mas se você representa uma empresa que quer sempre os melhores profissionais em sua equipe, também estáno lugar certo! Aqui você consegue o profissional que com toda certeza fará a diferença em sua empresa!</h4>

                        <Link to='/login'><button type="button" className="btn btn-success">Realizar Login</button></Link>
                        <br/>
                        <br/>
                        <Link to='/cadastro'><button type="button" className="btn btn-success">Realizar Cadastro</button></Link>

                </Texto>

                <img src={logo} alt="Logo do site"></img>

            </Wrapper>

            <Footer />
        </>
    );
}

export default Home;