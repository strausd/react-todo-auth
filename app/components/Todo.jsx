var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export class Todo extends React.Component{
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle (e) {
        if(e.target.type !== 'checkbox') {
            this.refs.completedCheckbox.checked = !this.refs.completedCheckbox.checked;
        }
        var {id, dispatch} = this.props;
        dispatch(actions.startToggleTodo(id, this.refs.completedCheckbox.checked));
    }
    render () {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick={this.onToggle}>
                <div className="ui checkbox">
                    <input className="todo-checkbox" type="checkbox" nameName="example" defaultChecked={completed} ref="completedCheckbox"/>
                    <label>
                        <p>{text}</p>
                        <p className="todo-subtext">{renderDate()}</p>
                    </label>
                </div>
            </div>
        );
    }
};

export default connect()(Todo);
