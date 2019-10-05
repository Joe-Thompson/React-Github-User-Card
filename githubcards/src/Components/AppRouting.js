import React from 'react';
import { Route } from 'react-router-dom';
import Joe from './JoesCard'
import HomeForm from "./HomeForm";

const AppRouting = () => {
    return (
        <div>
           <Route exact path='/' component={HomeForm} />
           <Route exact path='/Joe-Thompson' component={Joe} />
        </div>
    )
};

export default AppRouting;