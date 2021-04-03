import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #67aaaf;
    padding: 1rem;
    text-align: center;

    >h3, h4, h5{
        font-weight: bold;
    }
`; 

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;    
`; 

export const Pessoal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`; 

export const Pessoa = styled.div`
    > img{
        border-radius: 50%;
    }
`;

export const Contato = styled.div`
    
`;

export const Descricao = styled.div`
    height: 100%;
`;

export const Habilidades = styled.div`
    height: 100%;
`;

export const Experiencia = styled.div`
    height: 100%;
`;