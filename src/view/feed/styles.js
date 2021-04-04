import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100%;
    text-align: center;
`;

export const DivCurriculo = styled.div`    
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3rem;
`;

export const Header = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    >h1{
        margin-bottom: 2rem;
    }
`;

export const Filtro = styled.div`
    display: flex;
    font-weight: bold;
    padding:1rem;
    justify-content: space-between;   
`; 

export const Filtros = styled.div`
    > label{
        margin-right: 0.25rem;
    }
    > input{
        margin-right: 1rem;
    }
`;