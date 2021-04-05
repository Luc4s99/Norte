import styled from 'styled-components';

export const Wrapper = styled.div`
    text-align: center;
    min-height: 100vh;


    > img {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    > h3 {
        font-size: 30px;
    }
    
`;

export const Links = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #67aaaf;
    width: 300px;
    height: 100px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;

    /* > a:first-child{
        margin-bottom: 15px;
    } */
    

`;

export const Box = styled.div`

    background-color: #67aaaf;
    margin: auto;
    margin-bottom: 20px;
    width: 40%;
    padding: 1rem;
    border-radius: 10px;
    
`; 

export const Opcao = styled.div`
    display: flex;
    justify-content: space-around;
    
    >div label{
        
    }

    >div input{
        
    }
`;