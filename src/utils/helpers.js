export const isLeapYear = (year) => {
   return new Date(year, 1, 29).getMonth() === 1;
};

//function for creating date in format '02.12'
export const formatDateForRequest = (currentDate, daysDif = 0) => {
   let newDate = new Date();
   if(daysDif) {
      newDate.setDate(currentDate.getDate() + daysDif)
   } else {
      newDate = currentDate;
   }
   return  `${newDate.getMonth() + 1}`.padStart(2, 0) + '.' + `${newDate.getDate()}`.padStart(2, 0);
};

const getFormattedBirthday = (birthday) => {
   return new Date(birthday).getMonth() + new Date(birthday).getDate()
};

export const sortByName = (users) => {
   return [...users].sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
   })
};

export const sortByDateAndName = (users, reverse) => {
   const newUsersArr = [...users].sort((a, b) =>  {
      let dateA = getFormattedBirthday(a.birthday),
          dateB = getFormattedBirthday(b.birthday);
      if (dateA < dateB)
         return -1;
      if (dateA > dateB)
         return 1;
      if(dateA === dateB) {
         //if date is the same - filter them by name
         if(reverse) {
            return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
         } else {
            return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
         }
      }
   });

   return reverse ? newUsersArr.reverse() : newUsersArr;
};
