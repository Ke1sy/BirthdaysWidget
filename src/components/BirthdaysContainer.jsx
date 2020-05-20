import React, {useEffect, useState} from 'react';
import Birthdays from "./bithdays/Birthdays";
import {isLeapYear, formatDateForRequest, sortByName, sortByDateAndName} from "../utils/helpers";
import {birthdaysAPI} from "../api/api";

const TABS = [
    {
        "id": "1",
        "name": "Past",
        time: 'prev'
    }, {
        "id": "2",
        "name": "Today",
        time: 'today'
    }, {
        "id": "3",
        "name": "Upcoming",
        time: 'next'
    },
];

const BirthdaysContainer = () => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [widgetWidth, setWidgetWidth] = useState(0);
    const [usersToShow, setUsersToShow] = useState(10);
    const [moreUsers, setMoreUsers] = useState(false);
    const widgetRef = React.createRef();

    //init tabs
    useEffect(() => {
        const todayTab = TABS.find(tab => tab.time === 'today');
        changeTab(todayTab);
        getWidgetWidth();
    }, []);

    useEffect(() => {
        checkMoreUsers();
    }, [filteredUsers]);

    useEffect(() => {
        let subUsersArr = users.length ? users.slice(0, usersToShow) : users;
        setFilteredUsers(subUsersArr)
    }, [users, usersToShow]);

    //update users after the tab was changed
    useEffect(() => {
        if (selectedTab) {
            updateUsers();
            setUsersToShow(10);
        }
    }, [selectedTab]);

    //update widget width for correct layout
    useEffect(() => {
        window.addEventListener('resize', getWidgetWidth);
        return () => {
            window.removeEventListener('resize', getWidgetWidth)
        }
    });

    const getWidgetWidth = () => {
        if (widgetRef.current) {
            setWidgetWidth(widgetRef.current.offsetWidth);
        }
    };

    const changeShowCount = (val = 10) => {
        setUsersToShow(usersToShow + val);
    };

    const checkMoreUsers = () => {
        setMoreUsers(users.length > usersToShow);
    };

    const changeTab = (tab) => {
        setSelectedTab(tab)
    };

    const updateUsers = () => {
       const [dateFrom, dateTo, reverse = false] = getUsersDateParams();
       requestUsers(dateFrom, dateTo, reverse);
    };

    // function for generating of the request params for api according to selected tab
    const getUsersDateParams = () => {
        const currentDate = new Date();
        let dateFrom, dateTo = null;
        let reverse = false;
        switch (selectedTab.time) {
            case 'today':
                const year = currentDate.getFullYear();
                const isFebruary28 = currentDate.getDate() === 28 && currentDate.getMonth() === 1;
                dateFrom = formatDateForRequest(currentDate, 0);
                if(isFebruary28) {
                    //if it's 28th of february and leap year and we display only 28.02. Otherwise, 28.02 and 29.02
                    dateTo = isLeapYear(year) ? formatDateForRequest(currentDate, 0) : formatDateForRequest(currentDate, 1, true);
                } else {
                    dateTo = formatDateForRequest(currentDate, 0);
                }
                break;
            case 'next':
                dateFrom = formatDateForRequest(currentDate, 1);
                dateTo = formatDateForRequest(currentDate, 14);
                break;
            case 'prev':
                dateFrom = formatDateForRequest(currentDate, -14);
                dateTo = formatDateForRequest(currentDate, -1);
                reverse = true;
                break;
            default:
                break;
        }

        return [dateFrom, dateTo, reverse];
    };

    // api request
    const requestUsers = async (dateFrom, dateTo, reverse) => {
        try {
            const {users} = await birthdaysAPI.getBirthdaysList(dateFrom, dateTo);
            if(dateFrom === dateTo) {
                setUsers(sortByName(users));
            } else  {
                setUsers(sortByDateAndName(users, reverse));
            }
        }
        catch (e) {
            console.error(e);
        }
    };

    return (
        <Birthdays
            tabs={TABS}
            selectedTab={selectedTab}
            changeTab={changeTab}
            users={filteredUsers}
            ref={widgetRef}
            widgetWidth={widgetWidth}
            moreUsers={moreUsers}
            changeShowCount={changeShowCount}
        />
    );
};

export default BirthdaysContainer;