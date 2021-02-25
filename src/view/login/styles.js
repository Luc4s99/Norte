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

    background-color: #67aaaf;
    width: 300px;
    height: 100px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    
    

    > a:first-child{
        margin-bottom: 15px;
    }

`;