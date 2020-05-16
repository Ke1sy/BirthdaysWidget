import styled from 'styled-components';

export const Header = styled.header`
    height: 60px;
    background: #D80027;
    color: #fff;
    padding: 0 15px;
    font-size: 30px;
    display: flex;
    align-items: center;
`;

export const Main = styled.div`
    padding: 25px 15px;
    display: flex;
    @media (max-width: 768px) {
       flex-direction: column;
    }
`;

export const TestContent = styled.div`
    width: 50%;
    min-width: 50%;
    padding: 20px;
    @media (max-width: 768px) {
       width: 100%;
       min-width: 100%;
       marginBottom: 20px
    }
    ${({lg}) => lg && `
       width: 70%;
       min-width: 70%;
    `}
`;


