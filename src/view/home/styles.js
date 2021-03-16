import styled from 'styled-components';
import wallpaper from '../../assets/images/img_home.jpeg';

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

export const Image = styled.div`

    text-align: left;
    height: 100vh;
`;

export const Title = styled.div`

    padding: 20px;
`;

export const Texto = styled.div`

    background-color: #67aaaf;
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 150px;
    padding-right: 150px;
    margin-left: 15%;
    margin-right: 15%;
    font: 20px;
`;

export const Box = styled.div`

    display: inline-block;
    margin-top: 40px;
`;