import styled from 'styled-components/macro';

export const Container = styled.div`
    position: relative;

`;
export const Title = styled.h1`
    padding: 10px;
`;

export const Item = styled.div`
    text-align: left;

    & h3{
        text-align: right;
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
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, .8%);
    border: ${(prop: any)=> prop.background ? 'none' : '1px solid lightgrey'};
`;