import styled from 'styled-components/macro';


export const Container = styled.div`
    display: flex;
    margin: 20px 0;
`;

export const Image = styled.img`
    object-fit: contain;
    width: 150px;
    height: 180px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    text-align: left;
`;

export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 3px;
`;

export const Price = styled.p`
    padding: 1.5px 3px;
    font-size: 1.5rem;
`;

export const Rating = styled.div`
    display: flex;
`;

export const Button = styled.button`
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    width: 130px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`;

