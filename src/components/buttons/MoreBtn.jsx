import React from 'react';
import styled from "styled-components";
import {colors} from "../../styleSettings";
import arrowIcon from '../../assets/icons/arrow-right.svg'

const Button = styled.button`
    color: ${colors.textSecondary};
    padding: 7px 20px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    transition: 0.1s linear;
    border: 1px solid transparent;
    &:hover {
       border-color: ${colors.main};
    }
    
    &:focus {
       outline-color: ${colors.main};
    }
`;

const Icon = styled.img`
    position: relative;
    left: 6px;
`;

const MoreBtn = React.memo(({onClick, text}) => {
    return (
        <Button onClick={() => onClick()}>
            <span>{text || 'Show more'}</span>
            <Icon src={arrowIcon} alt=""/>
        </Button>
    );
});

export default MoreBtn;