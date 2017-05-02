var $ = require('jQuery');

module.exports = {
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;
        var filterText = searchText ? searchText.toLowerCase() : searchText;
        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        // Filter by searchText
        if(searchText && searchText.length > 0) {
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
