import React, { createContext } from 'react';

const MyContext = React.createContext({
    address:null,
    subject: null,
    date: null
});


export default MyContext