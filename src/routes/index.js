import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import history from './history';

const Login = lazy(() => import('../app/containers/Login'))
const Counter = lazy(() => import('../app/containers/Counter'))
const UserList = lazy(() => import('../app/containers/Users'))
const UserAdd = lazy(() => import('../app/containers/Users/Add'))
// const UserEdit = lazy(() => import('../app/containers/Users/Edit'))
const UserEdit = lazy(() => import('../app/containers/Users/EditForm'))
const NoMatchPage = lazy(() => import('../app/containers/NoMatchPage'))
const ContextForm = lazy(() => import('../app/containers/Context/Form'))
const Chart = lazy(() => import('../app/containers/Chart/App'))

const ComponentForTest1 = lazy(() => import('../app/containers/ComponentTest/ComponentForTest1'))

const Routes = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Router history={history}>
                <Link to="/login">Login</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/users">User</Link>
                <Link to="/test">Test</Link>
                <Link to="/context">Context</Link>
                <Link to="/chart">Chart</Link>

                <br />
                <Switch>
                    <Route path='/user/add' component={UserAdd} />
                    <Route path="/user/:id" component={UserEdit} />
                    <Route path="/users" component={UserList} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/login" component={Login} />
                    <Route path="/test" component={ComponentForTest1} />
                    <Route path="/context" component={ContextForm} />
                    <Route path="/chart" component={Chart} />
                    <Route path="/" exact component={Login} />
                    <Route path="*" component={NoMatchPage} />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;