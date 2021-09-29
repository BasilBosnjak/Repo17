   // Lodash
const _ = require('lodash');

// users nested array with four objects starts here
var users = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 24,
        gender: 'male'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 5,
        gender: 'female'
    },
    {
        id: 3,
        firstName: 'Jim',
        lastName: 'Carrey',
        age: 54,
        gender: 'male'
    },
    {
        id: 4,
        firstName: 'Kate',
        lastName: 'Winslet',
        age: 40,
        gender: 'female'
    }
];

// users nested array with four objects ends here

// getUsers function - list of users starts here
const getUsers = () => {
    var output ='';
    for (let i=0; i<users.length; i++) {
        output += `${users[i].id} - ${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
    }
    return output;
}

// getUsers function - list of users ends here
// findUser(id) function starts here

const findUserById = (id) => {
    try {
        var user = _.find(users, { id : id });
        var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;
        return iFindUser;
    } catch(error) {
        console.log("Cannot read property 'id'");
        return "Cannot read property 'id'";
    }
}

// findUser(id) function ends here
getUsers();
findUserById(6);

module.exports = findUserById;