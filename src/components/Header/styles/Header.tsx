import styled from 'styled-components/macro';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
export const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const Search = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
`;

export const SearchIco = styled(SearchIcon)`
    padding: 1.5px;
    background-color: #cd9042;
    font-size: 20px !important;
`;


export const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
`;

export const Input = styled.input`
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
`;

export const Frame = styled.div`

`;


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`;

export const Option = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    color: white;
`;


export const Option1 = styled.span`
    font-size: 10px;
`;

export const Option2 = styled.span`
    font-size: 13px;
    font-weight: 800;
`;

export const Basket = styled.div`
    display: flex;
    align-items: center;
    color: white;
`;

//extends Option1
export const BasketText = styled(Option1)`
    margin-left: 10px;
    margin-right: 10px;
`;

export const BasketIcon = styled(AddShoppingCartIcon)`
    padding: 1.5px;
    font-size: 24px !important
`;



