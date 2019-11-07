import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useParams
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import AuthForm from './auth/form/AuthForm.js';
import TripsList from './trips/list/TripsList.js';
import TripsItem from './trips/item/TripsItem.js';
import * as serviceWorker from './serviceWorker';

function PrivateRoute ({ store, children, ...rest }) {
    const isAuth = window.localStorage.getItem('isAuth');
    console.log(isAuth);
    return (
      <Route
        {...rest}
        render={({ location }) =>
            +isAuth ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: '/auth',
                    state: { from: location }
                }}
                />
            )
        }
      />
    );
  }

function TripsItemWihParams () {
    const { id } = useParams();
    return <TripsItem id={id} />;
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <TripsList />
                </PrivateRoute>
                <PrivateRoute path="/trip/:id">
                    <TripsItemWihParams />
                </PrivateRoute>
                <Route path="/auth">
                    <AuthForm />
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
