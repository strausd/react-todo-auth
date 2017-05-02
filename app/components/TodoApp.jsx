var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
    render: function () {
        return (
            <div className="ui stackable grid centered">
                <div className="eight wide computer twelve wide tablet tablet sixteen wide mobile column">
                    <h1 className="main-header">Todo App</h1>
                    <TodoSearch/>
                    <TodoList/>
                    <AddTodo/>
                </div>
            </div>
        );
    }
});

module.exports = TodoApp;
