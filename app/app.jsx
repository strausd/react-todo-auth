var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

// store.dispatch(actions.toggleShowCompleted());

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

// load semantic ui
// require('css!semantic-ui-css/semantic.min.css');

// App css
require('style!css!sass!applicationStyles');

const Home = () => <h1>Home page</h1>
const second = () => <h1>Second page</h1>

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todos" component={TodoApp} />
                <IndexRoute component={Login} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
