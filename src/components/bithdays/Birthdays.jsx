import React from 'react';
import styled from "styled-components";
import BirthdaysHeader from "./BirthdaysHeader";
import BirthdaysBody from "./BirthdaysBody";

const Content = styled.div`
    background: #fff;
    max-width: 800px;
    min-width: 250px;
    width: 100%;
    font-family: 'Vodafone Rg', sans-serif;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);

`;

const Birthdays = React.forwardRef(({tabs, selectedTab, changeTab, users, widgetWidth, changeShowCount, moreUsers}, ref) => {
    return (
        <Content ref={ref}>
            <BirthdaysHeader/>
            <BirthdaysBody
                tabs={tabs}
                selectedTab={selectedTab}
                changeTab={changeTab}
                users={users}
                widgetWidth={widgetWidth}
                moreUsers={moreUsers}
                changeShowCount={changeShowCount}
            />
        </Content>
    );
});

export default Birthdays;