import React from "react";
import { Switch, Route } from "react-router-dom";

import {view as HomeComponent} from "../pages/home/index";
import {view as LoginComponent} from "../pages/login/";
import NotFind from "../pages/notFind";
import {view as UserIndexComponent} from '../pages/user/index/index'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/home" component={HomeComponent} />
        <Route exact path="/user" component={UserIndexComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="*" component={NotFind} />
    </Switch>
);

export default Routes;
