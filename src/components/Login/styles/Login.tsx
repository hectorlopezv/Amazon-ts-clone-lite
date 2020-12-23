import styled from 'styled-components/macro';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

export const Button = styled.button`
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    cursor: pointer;
    border-color: #a88734 #9c7e31 #846a29;
    &:last-of-type{
        border-radius: 2px;
        width: 100%;
        height: 30px;
        margin-top: 10px;
        border-color: darkgray;
        background: none;
        transition: background .2s;
        &:hover {
            background: #e9e5e5;
        }
    }
`;

export const Image = styled.img`
    object-fit: contain;
    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
`;

export const Frame = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 3px;
    border: 1px solid lightgrey;
    padding: 20px;
    text-align: left;

`;

export const Title = styled.h1`
    font-weight: 500;
    margin-bottom: 10px;
`;

export const Label = styled.h5`
    margin-bottom: 5px;
    font-size: 10px;
`;

export const Text = styled.p`
    margin-top: 10px;
    font-size: 9px;
`;

export const Input = styled.input`

    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 97%;
    &:last-of-type{
        margin-bottom: 5px;
    }
`;