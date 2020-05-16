import React from 'react';
import styled from "styled-components";
import User from "./User";
import {colors, sizes} from "../../styleSettings";
import { Scrollbars } from 'react-custom-scrollbars';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 10px 0;
    justify-content: space-between;
    overflow: hidden;
  
    ${props => props.smStyles && `
        flex-direction: column;
        flex-wrap: nowrap;
        padding:  10px 0 0;
    `}
`;

const EmptyMessage = styled.div`
    text-align: center;
    color: ${colors.textSecondary};
    margin: 20px auto;
    font-size: 18px;
    width: 82%;
`;

const Users = React.memo(({users, widgetWidth}) => {
    return (
        <Scrollbars style={{ width: '100%', height: 390,}} autoHide autoHideTimeout={2000}>
            <Wrapper smStyles={widgetWidth < sizes.md}>
                {users && users.map(user =>
                    <User key={user.id} user={user} widgetWidth={widgetWidth}/>
                )}
                {!users.length &&
                    <EmptyMessage>
                        Unfortunately there is no users with birthdays on these dates
                    </EmptyMessage>
                }
            </Wrapper>
        </Scrollbars>
    );
});

export default Users;