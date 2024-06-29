import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Harsh',
            image: 'https://avatars.githubusercontent.com/u/88657604?s=400&u=e201f66617a90463f6543bd7da84433096eec9fd&v=4',
            places: 4
        },
        {
            id: 'u2',
            name: 'Ha',
            image: 'https://avatars.githubusercontent.com/u/88657604?s=400&u=e201f66617a90463f6543bd7da84433096eec9fd&v=4',
            places: 1
        }
    ];

    return  <UsersList items = {USERS}/>;
};

export default Users;