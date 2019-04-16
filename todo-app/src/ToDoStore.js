import { observable, action, computed, decorate } from 'mobx';
class ToDoStore {
    todos = observable([]);
    idCount = 0;

    add(task) {
        this.todos.push({
            id: this.idCount,
            task: task,
            completed: false,
        });
        this.idCount += 1;
    }

    update(id, isCompleted) {
        // FIXME: This is not efficient. Store ToDos into a dictionary with ID as their key instead.
        // Find task to update
        for (let index = 0; index < this.todos.length; index++) {
            if (this.todos[index].id == id) {
                let todoItem = this.todos[index];
                todoItem.completed = !isCompleted;

                // Remove item from todo list
                this.todos.splice(index, 1);
                // Put back item into todo list
                this.todos.splice(index, 0, todoItem);
            }
        }
    }

    get numberOfToDosCount() {
        return this.todos.length;
    }

    get completedToDosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }
}

decorate(ToDoStore, {
    todos: observable,
    add: action,
    update: action,
    numberOfToDosCount: computed,
    completedToDosCount: computed,
})
export default ToDoStore;