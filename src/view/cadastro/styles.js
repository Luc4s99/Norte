import styled from 'styled-components';


export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    .btn{
        background-color: white;
        color: #3B989E;
        width: 20rem;
    }
`;

export const Logo = styled.div`

    margin-top: 40px;
    text-align: center;
    margin-left: 0;
`;

export const Label = styled.div`
    align-self: center;
    color: #FFF;
    font-size: 32px;
    margin-top: auto;
    margin-bottom: auto;

    border: 1px solid white;

    padding: 5rem;
    background-color: rgba(0,0,0,0.05);
    /* background-color: #FFF; */
    
`;

export const Opcao = styled.div`

    display: flex;
    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

`;

export const Imagem = styled.div`

    display: flex;
    justify-content: space-between;

    img {
        width: 20rem;
        height: 20rem;
        margin-bottom: 1rem;
    }

    img:first-child{
        margin-right: 5rem;
    }

    img:last-child{
        margin-left: 5rem;
    }
`;

export const Botao = styled.div`

    display: flex;
    justify-content: space-between;   

`;

export const Voltar  = styled.div`
    
    display: flex;
    align-self: center;
    margin-bottom: 5px;

    
`;
