import styled from 'styled-components/macro';


export const Container = styled.div`
    background-color: white;
    h1 {
        padding: 10px;
        font-size: 30px;
        font-weight: 400;
        background-color: rgb(234, 237, 237);
        border-bottom: 1px solid lightgrey;
        a{
            text-decoration: none;
        }
    }
`;

export const Title = styled.div`
    text-align: left;
    flex: 0.2;
`;

export const Item = styled.div`
    flex: 0.8;
`;

export const Address = styled.div`
    text-align: left;
    flex: 0.8;
`;

export const Section = styled.div`
    display: flex;
    padding: 20px;
    margin: 0 20px;
    justify-content: center;
    border-bottom: 1px solid lightgrey;
`;


export const Frame = styled.div`

`;

export const Details = styled.div`
    flex: 0.8;
`;

export const Price = styled.div`
    margin-top: -15px;
    @media(max-width: 592px){
        margin-top: 5px;
        text-align: left;
        margin-left: 28px;
    }
    & h3 {

    }
`;

export const Button = styled.button`
`;