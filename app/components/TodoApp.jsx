import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export class TodoApp extends React.Component{
    constructor (props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }
    onLogout (e) {
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    }
    render () {
        return (
            <div className="ui stackable grid centered">
                <div className="eight wide computer twelve wide tablet tablet sixteen wide mobile column">
                    <div className="page-actions">
                        <a href="#" className="ui primary basic button" onClick={this.onLogout}>Logout</a>
                    </div>
                    <h1 className="main-header">Todo App</h1>
                    <TodoSearch/>
                    <TodoList/>
                    <AddTodo/>
                </div>
            </div>
        );
    }
};

export default Redux.connect()(TodoApp);
