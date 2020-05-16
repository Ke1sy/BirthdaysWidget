import React from 'react';
import giftImg from '../../assets/images/gift.png'
import styled from "styled-components";

const Header = styled.div`
    background: #fff;
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 6px solid #D80027;
`;

const HeaderImg = styled.img`
    max-width: 140px;
    max-height: 125px;
`;

const BirthdaysHeader = React.memo(() => {
    return (
        <Header>
            <HeaderImg src={giftImg}  alt="gift"/>
        </Header>
    );
});

export default BirthdaysHeader;