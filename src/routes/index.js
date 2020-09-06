import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router,
         Switch, Route, Link } from 'react-router-dom';

const Login = lazy(() => import('../app/containers/Login'))
const Counter = lazy(() => import('../app/containers/Counter'))
const UserList = lazy(() => import('../app/containers/Users'))
const UserAdd = lazy(() => import('../app/containers/Users/Add'))
const UserEdit = lazy(() => import('../app/containers/Users/Edit'))
const NoMatchPage = lazy(() => import('../app/containers/NoMatchPage'))

const ComponentForTest1 = lazy(() => import('../app/containers/ComponentTest/ComponentForTest1'))

const Routes = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Link to="/login">Login</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/users">User</Link>
                <Link to="/test">Test</Link>

                <Switch>
                    <Route path='/user/add' component={UserAdd} />
                    <Route path="/user/:id" component={UserEdit} />
                    <Route path="/users" component={UserList} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/login" component={Login} />
                    <Route path="/test" component={ComponentForTest1} />
                    <Route path="/" component={Login} />
                    <Route path="*" component={NoMatchPage} />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;