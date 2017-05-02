var $ = require('jQuery');

module.exports = {
    setTodos: function (todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;
        var filterText = searchText.toLowerCase();
        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        // Filter by searchText
        if(searchText.length > 0) {
            filteredTodos = filteredTodos.filter((todo) => {
                var todoText = todo.text.toLowerCase();
                return todoText.includes(filterText);
            });
        }
        // Sort todos with completed at bottom
        filteredTodos.sort((a, b) => {
            if(!a.completed && b.completed) {
                return -1;
            } else if(a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return filteredTodos;
    }
};
