import styled from 'styled-components/macro';


export const Container = styled.div`
    background-color: #232f3e;
    width: 100%;
    padding: 70px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`;
export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.h2`
    font-size: 17px;
    color: white;
    font-weight: 700;
    margin: 6px 0 14px 0;
`;
export const Text = styled.p``;
export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 10px;
    justify-items: start;
    text-align: left;
    @media (min-width: 1273px){
        grid-template-columns: repeat(4, minmax(250px, 1fr));
    }
    @media (max-width: 1272px){
        grid-template-columns: repeat(4, minmax(120px, 1fr));
    }
    @media (max-width: 580px){
        grid-template-columns: repeat(2, minmax(50px, 1fr));
    }
    @media (max-width: 440px){
        grid-template-columns: repeat(2, minmax(110px, 1fr));
    }
    
`;
export const Link = styled.a`
    color: white;
    font-size: 15px;
    text-decoration: none;
    margin-bottom: 10px;
`;