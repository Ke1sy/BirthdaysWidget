import axios from "axios";
import {BIRTHDAY_BASE_URL} from "../App";

export const birthdaysAPI = {
    getBirthdaysList: (dateFrom, dateTo) => {
        return axios.get(`${BIRTHDAY_BASE_URL}api/birthdays?dateFrom=${dateFrom}&dateTo=${dateTo}`)
            .then(response => response.data)
    },
};