import React from 'react';
import styled from "styled-components";
import {colors, sizes} from "../../styleSettings";
import BirthdaysTabs from "./BirthdaysTabs";
import Users from "./Users";
import MoreBtn from "../buttons/MoreBtn";

const Body = styled.div`
    padding: 27px 20px 20px;
    width: 100%;
    box-sizing: border-box;
    background: linear-gradient(to bottom, rgba(232,232,232,1) 0%, rgba(255,255,255,1) 50%);
    min-height: 640px;
`;

const BodyHead = styled.div`
    width: 100%;
`;

const BodyTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-size: 24px;    
    font-weight: bold;
    color: ${colors.main};
    ${({fontSizeLg}) => fontSizeLg && `
       font-size: 36px;    
    `}
`;

const BodyContent = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;
const BodyFooter = styled.div`
   text-align: center;
   margin-top: 20px;
`;

const BirthdaysBody = React.memo(({tabs, selectedTab, changeTab, users, widgetWidth, moreUsers, changeShowCount}) => {
    return (
        <Body>
            <BodyHead>
                <BodyTitle fontSizeLg={widgetWidth > sizes.xs}>Birthdays</BodyTitle>
                <BirthdaysTabs tabs={tabs} selectedTab={selectedTab} changeTab={changeTab} widgetWidth={widgetWidth}/>
            </BodyHead>
            <BodyContent>
                <Users users={users} widgetWidth={widgetWidth}/>
            </BodyContent>
            {moreUsers &&
                <BodyFooter>
                    <MoreBtn visible={true} onClick={() => changeShowCount()}/>
                </BodyFooter>
            }
        </Body>
    );
});

export default BirthdaysBody;