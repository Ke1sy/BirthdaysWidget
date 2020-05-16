import React from 'react';
import styled from "styled-components";
import {colors, sizes} from "../../styleSettings";

const Tabs = styled.div`
    max-width: 375px;
    margin: 29px auto;
    color: ${colors.main};
    display: flex;
    justify-content: center
    padding: 20px 0
`;

const Tab = styled.div`
      font-size: 17px;
      width: 33.33%;
      text-align: center;
      letter-spacing: -0.3px;
      transition: font-weight 0.1s linear;
      cursor: pointer;
      ${({selected}) => selected && `
         font-weight: bold;
         pointer-events: none;
      `};
      ${({fontSizeLg}) => fontSizeLg && `
        font-size: 19px;
      `}
      &:hover{
        text-decoration: underline
      }
`;

const Title = styled.div`
      text-transform: uppercase;
      &.active {
        font-weight: bold;
    }
`;

const BirthdaysTabs = React.memo(({tabs, selectedTab, changeTab, widgetWidth}) => {
    return (
        <Tabs>
            {tabs.map(tab =>
                <Tab selected={selectedTab === tab} onClick={() => changeTab(tab)} key={tab.id}>
                    <Title fontSizeLg={widgetWidth > sizes.xs}>{tab.name}</Title>
                    {tab.time !== 'today' &&
                    <div>dates</div>
                    }
                </Tab>
            )}
        </Tabs>
    );
});

export default BirthdaysTabs;