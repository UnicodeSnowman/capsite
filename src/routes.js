import { DefaultRoute, Route } from 'react-router';
import React from 'react';
import Root from './handlers/root';
import Elsewhere from './components/app';

export default (
    <Route handler={Root} path="/">
        <Route handler={Elsewhere} name="elsewhere" path="elsewhere" />
        <Route handler={Elsewhere} name="thingGenerator" path="things" />
    </Route>
);
