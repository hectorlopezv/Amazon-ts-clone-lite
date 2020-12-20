import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
`;

export const Info = styled.div`
    height: 53px;
    margin-bottom: 15px;
    width: 100%;
    text-align: left;
    
`;

export const Text = styled.p`
`;

export const Price = styled.p`
    margin-top: 5px;
`;

export const Rating = styled.div`

    display: flex;
    text-align: center;
    justify-content: flex-start;;
`;

export const Image = styled.img`
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 11px;
`;

export const Button = styled.button`
    background-color: #f0c14b;
    padding: 1.5px 3px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`;