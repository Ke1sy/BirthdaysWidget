import React from 'react';
import styled from "styled-components";
import userPlaceholder from '../../assets/images/userPlaceholder.png'
import {colors, sizes} from "../../styleSettings"
import {BIRTHDAY_BASE_URL} from "../../App";

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const UserItem = styled.div`
       display: flex;
       width: 48%;
       margin-bottom: 30px;
       ${({fullWidth}) => fullWidth && " width: 100%;"}
`;

const UserImg = styled.div`
    ${({size}) => size && `
        width: ${size}px;
        height:  ${size}px;
        min-height:  ${size}px;
        min-width:  ${size}px;
    `}
`;

const ImgItem = styled.img`
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%;
`;

const UserInfo = styled.div`
    padding: 10px 20px 3px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 100px);
   ${({xsPaddings}) => xsPaddings && `padding: 10px;`}
`;

const UserName = styled.div`
    font-size: 19px;
    color: ${colors.black};
    margin-bottom: 4px;
`;

const UserJob = styled.div`
    font-size: 18px;
    color: ${colors.textMain}
`;

const UserDate = styled.div`
      color: ${colors.black};
      font-weight: bold;
      margin-top: auto;
      font-size: 18px;
`;
const User = React.memo(({user, widgetWidth}) => {
    const avatarImg = user.avatarUrl !== null ? BIRTHDAY_BASE_URL+user.avatarUrl : userPlaceholder;

    const getFormattedDate = (birthdayDate) => {
        const date = new Date(birthdayDate);
        return `${MONTHS[date.getMonth()]} ${date.getDate()}` ;
    };

    return (
        <UserItem fullWidth={widgetWidth < sizes.md}>
            <UserImg size={widgetWidth < sizes.xs ? 80 : 100}>
                <ImgItem src={avatarImg} alt={user.name}/>
            </UserImg>
            <UserInfo xsPaddings={widgetWidth < sizes.xs}>
                <UserName>{user.name}</UserName>
                <UserJob>{user.jobTitle}</UserJob>
                <UserDate>{getFormattedDate(user.birthday)}</UserDate>
            </UserInfo>
        </UserItem>
    );
});


export default User;