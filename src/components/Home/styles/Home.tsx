import styled from 'styled-components/macro';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
`;

export const Image = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;


export const Frame = styled.div`
    
`;

export const Row = styled.div`

    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
`;