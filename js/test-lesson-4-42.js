console.log('');
console.log('tsk 4.42');

/*

*/

const testUsers = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
];
/*
Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
 відсортований за зростанням їх балансу (властивість balance).

    Оголошена змінна sortByAscendingBalance
    Змінній sortByAscendingBalance присвоєна стрілочна функція з параметром (users)
    Значення параметра users не змінюється
    Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, 
    відсортований за зростанням їх балансу
    Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
    Для перебирання параметра users використаний метод sort()

*/
/*
const getTotalFriendCount = users => {
    return users.reduce((friendsCount, user) =>
    {return (friendsCount + user.friends.length)}, 0);
};
*/
//[...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
//[...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
//[...books].sort((firstBook, secondBook) => (secondBook.author).localeCompare(firstBook.author));
//[...books].sort((firstBook, secondBook) => (firstBook.author).localeCompare(secondBook.author));

// Change code below this line
const sortByAscendingBalance = users => {
    return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
};
// Change code above this line


console.log(sortByAscendingBalance(testUsers));
