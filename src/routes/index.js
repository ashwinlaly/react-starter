import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router,
         Switch, Route, Link } from 'react-router-dom';

const Login = lazy(() => import('../app/containers/Login'))
const Counter = lazy(() => import('../app/containers/Counter'))
const UserList = lazy(() => import('../app/containers/Users'))
const UserEdit = lazy(() => import('../app/containers/Users/Edit'))
const NoMatchPage = lazy(() => import('../app/containers/NoMatchPage'))

const Routes = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Link to="/login">Login</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/users">User</Link>

                <Switch>
                    <Route path="/user/:id" component={UserEdit} />
                    <Route path="/users" component={UserList} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Login} />
                    <Route path="*" component={NoMatchPage} />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routes;