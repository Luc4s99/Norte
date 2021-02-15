import styled from 'styled-components';


export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    
    width: 100%;
    height: 100%;
`;

export const Logo = styled.div`

    margin-top: 40px;
    text-align: center;
    margin-left: 0;

    img{
        
        width: 300px;
        height: 150px;
    }
`;

export const Label = styled.div`
    align-self: center;
    color: #ace600;
    font-size: 32px;
    margin-top: 10%;
    margin-bottom: 10%;
`;

export const Opcao = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: auto;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: auto;

    .btn{
        background-color: white;
        color: #3B989E;
    }

`;

export const Voltar  = styled.div`
    
    display: flex;
    align-self: center;
    margin-bottom: 10px;

    .btn{
        background-color: white;
        color: #3B989E;
    }
`;
