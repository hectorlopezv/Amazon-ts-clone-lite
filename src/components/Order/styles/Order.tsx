import styled from 'styled-components/macro';

export const Item = styled.div`
    text-align: left;

    & h3{
        text-align: right;
        margin-bottom: 30px;
    }

    & h2{
        margin-left: 10px;
    }
    & p{
        margin-left: 10px;
    }
    & .order_id{
        
    }
    
`;

export const Frame = styled.div`
    background-color: ${(prop: any)=> prop.background ? 'transparent' : 'white'};
    width: 88%;
    padding: 10px 8px;
    margin: 0 auto;

    border: ${(prop: any)=> prop.background ? 'none' : '1px solid lightgrey'};

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    ${Frame}{
        margin-bottom: 15px;
    }
`;
export const Title = styled.h1`
    padding: 10px;
`;


