var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
    render: function () {
        var {dispatch, showCompleted, searchText} = this.props;
        return (
            <div className="">
                <div className="todo-search">
                    <div className="ui fluid input search-input">
                        <input type="text" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
                            var searchText = this.refs.searchText.value;
                            dispatch(actions.setSearchText(searchText));
                        }}/>
                    </div>
                    <div className="ui toggle checkbox">
                        <input type="checkbox" ref="showCompleted" defaultChecked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        <label>Show completed todos</label>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);
